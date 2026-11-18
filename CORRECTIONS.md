# Content corrections and verification scope

This review corrects concrete errors rather than treating syntactically valid
TeX as proof that a mathematical statement is true.

- Convexity does not imply a unique minimizer: the constant function on an
  interval is a counterexample. Strict convexity gives at most one minimizer on
  a convex feasible set. Convex quadratic programs require a positive
  semidefinite Hessian. The linear-program primal/dual pair now consistently uses
  `min c^T x` subject to `Ax >= b, x >= 0`, paired with `max b^T lambda` subject
  to `A^T lambda <= c, lambda >= 0`. See
  [Boyd and Vandenberghe, Convex Optimization](https://web.stanford.edu/~boyd/cvxbook/).
- The normwise residual bound now bounds **relative** solution error, with
  `||x - x_hat|| / ||x||` on the left. For example, `A=1, b=100, x_hat=101`
  violates the old absolute-error inequality but satisfies the relative bound.
  Nonsingularity and a nonzero right-hand side are stated. See
  [LAPACK error bounds](https://netlib.org/lapack/lug/node81.html) and the
  [CS 357 condition-number derivation](https://cs357.cs.illinois.edu/textbook/notes/condition.html).
- Adam's update includes bias-corrected moments. See the
  [original Adam paper](https://arxiv.org/abs/1412.6980).
- Shared on-chip memory generally has higher bandwidth than global off-chip
  memory; the CUDA statement had this reversed. See
  [NVIDIA's CUDA programming guide](https://docs.nvidia.com/cuda/archive/13.2.0/cuda-programming-guide/02-basics/writing-cuda-kernels.html).
- Qualify diagonalization, pivoted LU, positive-definiteness for conjugate
  gradients, full-column-rank normal equations, distinct-root ODE solutions,
  homogeneous matrix-exponential solutions, Cauchy's theorem, and Taylor-series
  equality. Finite-step CG termination is an exact-arithmetic statement.
- Fix the scope of the logistic log-likelihood summation, KKT feasibility,
  missing Adam bias correction, the Frobenius norm for complex entries, and
  the distinction between continuous and absolutely continuous distributions.
- Add missing NumPy and PyTorch imports and explicit example data. Replace an
  IPython-only `%timeit` command with a regular Python timer. Keep conceptual FEM
  assembly explicitly labeled as pseudocode. Distributed training remains a
  `torchrun` example requiring the appropriate runtime and hardware.

TeX parser checks detect malformed formulas, including the unescaped underscore
in the MPI label. Python AST checks validate syntax; they do not install or run
every scientific-computing dependency, GPU program, or distributed example.
These are targeted content corrections, not a formal audit of every theorem,
reference URL, or example dependency.
