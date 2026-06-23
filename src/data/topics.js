const topics = [
  {
    "id": "limits-continuity",
    "title": "Limits and Continuity",
    "domain": "calculus",
    "difficulty": "introductory",
    "prerequisites": [],
    "related": [
      "differentiation",
      "sequences-series",
      "multivariable-calculus"
    ],
    "summary": "Limits formalize the idea of approaching a value. Continuity requires that the limit equals the function value. These concepts underlie all of calculus and analysis.",
    "keyPoints": [
      "The epsilon-delta definition gives a rigorous foundation for limits.",
      "A function is continuous at a point if the limit exists and equals the function value.",
      "Continuity is preserved under sums, products, and compositions (where defined)."
    ],
    "formulas": [
      {
        "name": "Limit definition",
        "tex": "\\lim_{x \\to a} f(x) = L \\iff \\forall \\varepsilon > 0, \\exists \\delta > 0 : 0 < |x-a| < \\delta \\implies |f(x)-L| < \\varepsilon"
      },
      {
        "name": "Continuity",
        "tex": "f \\text{ is continuous at } a \\iff \\lim_{x \\to a} f(x) = f(a)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\ndef f(x):\n    return np.sin(x) / x\n\nx = np.linspace(-0.01, 0.01, 1000)\n# f(x) approaches 1 as x -> 0\nprint(f(x).mean())  # ~ 1.0"
      }
    ],
    "references": [
      {
        "title": "Calculus",
        "author": "Michael Spivak",
        "source": "Publish or Perish",
        "url": "https://www.mathpop.com/bookhtm/Cal.htm"
      },
      {
        "title": "Principles of Mathematical Analysis",
        "author": "Walter Rudin",
        "source": "McGraw-Hill",
        "url": "https://en.wikipedia.org/wiki/Principles_of_Mathematical_Analysis"
      }
    ],
    "tags": [
      "foundations",
      "analysis"
    ],
    "applications": [
      "differentiation",
      "integration"
    ]
  },
  {
    "id": "differentiation",
    "title": "Differentiation",
    "domain": "calculus",
    "difficulty": "introductory",
    "prerequisites": [
      "limits-continuity"
    ],
    "related": [
      "integration",
      "multivariable-calculus",
      "vector-calculus",
      "gradient-descent"
    ],
    "summary": "Differentiation measures the instantaneous rate of change of a function. It is the central tool for optimization, physics, and machine learning.",
    "keyPoints": [
      "The derivative is defined as the limit of a difference quotient.",
      "Differentiability implies continuity, but not vice versa.",
      "The chain rule enables derivatives of composite functions."
    ],
    "formulas": [
      {
        "name": "Derivative definition",
        "tex": "f'(x) = \\lim_{h \\to 0} \\frac{f(x+h)-f(x)}{h}"
      },
      {
        "name": "Chain rule",
        "tex": "\\frac{d}{dx} f(g(x)) = f'(g(x)) \\cdot g'(x)"
      },
      {
        "name": "Product rule",
        "tex": "\\frac{d}{dx} [u(x)v(x)] = u'(x)v(x) + u(x)v'(x)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import jax.numpy as jnp\nfrom jax import grad\n\ndef f(x):\n    return jnp.sin(x) ** 2\n\ndf = grad(f)\nprint(df(1.0))  # derivative at x=1"
      }
    ],
    "references": [
      {
        "title": "Calculus",
        "author": "Michael Spivak",
        "source": "Publish or Perish",
        "url": "https://www.mathpop.com/bookhtm/Cal.htm"
      },
      {
        "title": "MIT 18.01 Single Variable Calculus",
        "author": "David Jerison",
        "source": "MIT OpenCourseWare",
        "url": "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/"
      }
    ],
    "tags": [
      "foundations",
      "rates-of-change"
    ],
    "applications": [
      "gradient-descent"
    ]
  },
  {
    "id": "integration",
    "title": "Integration",
    "domain": "calculus",
    "difficulty": "introductory",
    "prerequisites": [
      "limits-continuity",
      "differentiation"
    ],
    "related": [
      "sequences-series",
      "multivariable-calculus",
      "probability-axioms"
    ],
    "summary": "Integration generalizes area under a curve and is the inverse operation of differentiation (Fundamental Theorem of Calculus). It is essential for probability, physics, and signal processing.",
    "keyPoints": [
      "The Riemann integral approximates area via finite sums.",
      "The Lebesgue integral generalizes integration to a broader class of functions.",
      "The Fundamental Theorem connects differentiation and integration."
    ],
    "formulas": [
      {
        "name": "Definite integral",
        "tex": "\\int_a^b f(x) \\, dx = \\lim_{\\|P\\| \\to 0} \\sum_{i=1}^n f(x_i^*) \\Delta x_i"
      },
      {
        "name": "Fundamental Theorem of Calculus",
        "tex": "\\frac{d}{dx} \\int_a^x f(t) \\, dt = f(x)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy import integrate\n\ndef f(x):\n    return x ** 2\n\nresult, error = integrate.quad(f, 0, 1)\nprint(result)  # 0.333..."
      }
    ],
    "references": [
      {
        "title": "Calculus",
        "author": "Michael Spivak",
        "source": "Publish or Perish",
        "url": "https://www.mathpop.com/bookhtm/Cal.htm"
      },
      {
        "title": "Real Analysis",
        "author": "H.L. Royden and P.M. Fitzpatrick",
        "source": "Pearson",
        "url": "https://www.pearson.com/en-us/subject-catalog/real-analysis/P200000005792"
      }
    ],
    "tags": [
      "foundations",
      "area",
      "measure"
    ],
    "applications": []
  },
  {
    "id": "sequences-series",
    "title": "Sequences and Series",
    "domain": "calculus",
    "difficulty": "introductory",
    "prerequisites": [
      "limits-continuity"
    ],
    "related": [
      "integration",
      "fourier-analysis",
      "complex-analysis"
    ],
    "summary": "Sequences and series provide the machinery for infinite sums and approximations. Convergence tests determine when infinite processes are well-defined.",
    "keyPoints": [
      "A series converges if its sequence of partial sums converges.",
      "Absolute convergence implies convergence and allows rearrangement.",
      "Taylor series approximate smooth functions by polynomials."
    ],
    "formulas": [
      {
        "name": "Taylor series",
        "tex": "f(x) = \\sum_{n=0}^{\\infty} \\frac{f^{(n)}(a)}{n!}(x-a)^n"
      },
      {
        "name": "Geometric series",
        "tex": "\\sum_{n=0}^{\\infty} r^n = \\frac{1}{1-r}, \\quad |r| < 1"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import math\n\ndef exp_taylor(x, n=10):\n    return sum(x**k / math.factorial(k) for k in range(n))\n\nprint(exp_taylor(1.0))  # ~ e"
      }
    ],
    "references": [
      {
        "title": "Calculus",
        "author": "Michael Spivak",
        "source": "Publish or Perish",
        "url": "https://www.mathpop.com/bookhtm/Cal.htm"
      },
      {
        "title": "Introduction to Real Analysis",
        "author": "Robert G. Bartle and Donald R. Sherbert",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Introduction+to+Real+Analysis,+4th+Edition-p-9780471433316"
      }
    ],
    "tags": [
      "infinite-sums",
      "approximation"
    ],
    "applications": [
      "fourier-analysis"
    ]
  },
  {
    "id": "multivariable-calculus",
    "title": "Multivariable Calculus",
    "domain": "calculus",
    "difficulty": "intermediate",
    "prerequisites": [
      "differentiation",
      "integration",
      "vectors-matrices"
    ],
    "related": [
      "vector-calculus",
      "linear-regression"
    ],
    "summary": "Multivariable calculus extends differentiation and integration to functions of several variables. It introduces partial derivatives, gradients, and multiple integrals.",
    "keyPoints": [
      "Partial derivatives measure rate of change along coordinate axes.",
      "The gradient points in the direction of steepest ascent.",
      "The multivariable chain rule is essential for backpropagation."
    ],
    "formulas": [
      {
        "name": "Partial derivative",
        "tex": "\\frac{\\partial f}{\\partial x_i}(x_1, \\dots, x_n) = \\lim_{h \\to 0} \\frac{f(x_1, \\dots, x_i+h, \\dots, x_n) - f(x_1, \\dots, x_n)}{h}"
      },
      {
        "name": "Gradient",
        "tex": "\\nabla f = \\left( \\frac{\\partial f}{\\partial x_1}, \\dots, \\frac{\\partial f}{\\partial x_n} \\right)^\\top"
      },
      {
        "name": "Multivariable chain rule",
        "tex": "\\frac{\\partial f}{\\partial t} = \\sum_{i=1}^n \\frac{\\partial f}{\\partial x_i} \\frac{\\partial x_i}{\\partial t}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import jax.numpy as jnp\nfrom jax import grad\n\ndef f(x):\n    return jnp.sum(x ** 2)\n\ngrad_f = grad(f)\nprint(grad_f(jnp.array([1.0, 2.0, 3.0])))  # [2, 4, 6]"
      }
    ],
    "references": [
      {
        "title": "Calculus, Vol. 2",
        "author": "Tom M. Apostol",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Calculus%2C+Volume+2%2C+2nd+Edition-p-9780471000075"
      },
      {
        "title": "MIT 18.02 Multivariable Calculus",
        "author": "Denis Auroux",
        "source": "MIT OpenCourseWare",
        "url": "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/"
      }
    ],
    "tags": [
      "several-variables",
      "gradient"
    ],
    "applications": [
      "gradient-descent",
      "linear-regression"
    ]
  },
  {
    "id": "vector-calculus",
    "title": "Vector Calculus",
    "domain": "calculus",
    "difficulty": "intermediate",
    "prerequisites": [
      "multivariable-calculus",
      "vectors-matrices"
    ],
    "related": [
      "partial-differential-equations",
      "complex-analysis",
      "fourier-analysis"
    ],
    "summary": "Vector calculus studies differentiation and integration of vector fields. It provides the language for electromagnetism, fluid dynamics, and many PDEs.",
    "keyPoints": [
      "Divergence measures net outflow of a vector field.",
      "Curl measures local rotation or circulation.",
      "The classical integral theorems (Green, Stokes, Divergence) relate local and global behavior."
    ],
    "formulas": [
      {
        "name": "Divergence",
        "tex": "\\nabla \\cdot \\mathbf{F} = \\sum_{i=1}^n \\frac{\\partial F_i}{\\partial x_i}"
      },
      {
        "name": "Curl",
        "tex": "\\nabla \\times \\mathbf{F}"
      },
      {
        "name": "Divergence theorem",
        "tex": "\\iiint_V (\\nabla \\cdot \\mathbf{F}) \\, dV = \\iint_{\\partial V} \\mathbf{F} \\cdot d\\mathbf{S}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\ndef divergence(F, x, y, z, eps=1e-5):\n    dFx_dx = (F(x+eps, y, z)[0] - F(x-eps, y, z)[0]) / (2*eps)\n    dFy_dy = (F(x, y+eps, z)[1] - F(x, y-eps, z)[1]) / (2*eps)\n    dFz_dz = (F(x, y, z+eps)[2] - F(x, y, z-eps)[2]) / (2*eps)\n    return dFx_dx + dFy_dy + dFz_dz"
      }
    ],
    "references": [
      {
        "title": "Div, Grad, Curl, and All That",
        "author": "H.M. Schey",
        "source": "W.W. Norton",
        "url": "https://wwnorton.com/books/9780393925166"
      },
      {
        "title": "Calculus on Manifolds",
        "author": "Michael Spivak",
        "source": "Addison-Wesley",
        "url": "https://www.mathpop.com/bookhtm/CatM.htm"
      }
    ],
    "tags": [
      "vector-fields",
      "integral-theorems"
    ],
    "applications": []
  },
  {
    "id": "ordinary-differential-equations",
    "title": "Ordinary Differential Equations",
    "domain": "calculus",
    "difficulty": "intermediate",
    "prerequisites": [
      "differentiation",
      "integration",
      "linear-systems"
    ],
    "related": [
      "partial-differential-equations",
      "neural-networks"
    ],
    "summary": "Ordinary differential equations (ODEs) describe systems evolving in time. They appear throughout physics, biology, control theory, and machine learning dynamics.",
    "keyPoints": [
      "Existence and uniqueness are guaranteed under Lipschitz continuity (Picard-Lindelöf).",
      "Linear ODEs can be solved via eigenvalue/eigenvector methods.",
      "Numerical methods (Euler, Runge-Kutta) approximate solutions."
    ],
    "formulas": [
      {
        "name": "First-order linear ODE",
        "tex": "\\frac{dy}{dt} = a(t)y + b(t)"
      },
      {
        "name": "Picard-Lindelöf",
        "tex": "\\frac{dy}{dt} = f(t,y), \\quad y(t_0)=y_0 \\text{ has unique solution if } f \text{ is Lipschitz in } y"
      },
      {
        "name": "Euler method",
        "tex": "y_{n+1} = y_n + h f(t_n, y_n)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy.integrate import solve_ivp\n\ndef dy_dt(t, y):\n    return -0.5 * y\n\nsol = solve_ivp(dy_dt, [0, 10], [2.0], t_eval=np.linspace(0, 10, 100))\nprint(sol.y[0, -1])  # decays to ~0.09"
      }
    ],
    "references": [
      {
        "title": "Ordinary Differential Equations",
        "author": "Vladimir I. Arnold",
        "source": "MIT Press",
        "url": "https://mitpress.mit.edu/9780262510189/ordinary-differential-equations/"
      },
      {
        "title": "Elementary Differential Equations and Boundary Value Problems",
        "author": "William E. Boyce and Richard C. DiPrima",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Elementary+Differential+Equations+and+Boundary+Value+Problems%2C+11th+Edition-p-9781119381648"
      }
    ],
    "tags": [
      "dynamics",
      "time-evolution"
    ],
    "applications": [
      "recurrent-neural-networks"
    ]
  },
  {
    "id": "partial-differential-equations",
    "title": "Partial Differential Equations",
    "domain": "calculus",
    "difficulty": "advanced",
    "prerequisites": [
      "multivariable-calculus",
      "vector-calculus",
      "ordinary-differential-equations"
    ],
    "related": [
      "fourier-analysis",
      "complex-analysis",
      "numerical-linear-algebra"
    ],
    "summary": "Partial differential equations (PDEs) involve functions of multiple variables and their partial derivatives. They model fundamental phenomena in physics, engineering, and finance.",
    "keyPoints": [
      "Major classes include elliptic, parabolic, and hyperbolic equations.",
      "Separation of variables and Fourier methods are classical solution techniques.",
      "Numerical methods include finite difference, finite element, and spectral methods."
    ],
    "formulas": [
      {
        "name": "Heat equation",
        "tex": "\\frac{\\partial u}{\\partial t} = \\alpha \\nabla^2 u"
      },
      {
        "name": "Wave equation",
        "tex": "\\frac{\\partial^2 u}{\\partial t^2} = c^2 \\nabla^2 u"
      },
      {
        "name": "Laplace equation",
        "tex": "\\nabla^2 u = 0"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\n# Finite difference for 1D heat equation\nN = 50\nu = np.sin(np.pi * np.linspace(0, 1, N))\nalpha = 0.01\ndt = 0.001\nfor _ in range(1000):\n    u[1:-1] += alpha * dt * (u[2:] - 2*u[1:-1] + u[:-2])"
      }
    ],
    "references": [
      {
        "title": "Partial Differential Equations",
        "author": "Lawrence C. Evans",
        "source": "AMS",
        "url": "https://bookstore.ams.org/view?ProductCode=GSM/19"
      },
      {
        "title": "Numerical Solution of Partial Differential Equations by the Finite Element Method",
        "author": "Claes Johnson",
        "source": "Dover",
        "url": "https://store.doverpublications.com/048646900x.html"
      }
    ],
    "tags": [
      "pde",
      "mathematical-physics"
    ],
    "applications": [
      "black-scholes"
    ]
  },
  {
    "id": "complex-analysis",
    "title": "Complex Analysis",
    "domain": "calculus",
    "difficulty": "advanced",
    "prerequisites": [
      "sequences-series",
      "multivariable-calculus"
    ],
    "related": [
      "fourier-analysis",
      "partial-differential-equations",
      "transformers"
    ],
    "summary": "Complex analysis studies functions of a complex variable. Analyticity and contour integration yield powerful tools with applications in signal processing, physics, and number theory.",
    "keyPoints": [
      "A function is holomorphic if it is complex differentiable in a neighborhood.",
      "Cauchy's theorem: integrals of holomorphic functions around closed contours vanish.",
      "The residue theorem evaluates real integrals and series."
    ],
    "formulas": [
      {
        "name": "Cauchy-Riemann equations",
        "tex": "\\frac{\\partial u}{\\partial x} = \\frac{\\partial v}{\\partial y}, \\quad \\frac{\\partial u}{\\partial y} = -\\frac{\\partial v}{\\partial x}"
      },
      {
        "name": "Cauchy integral formula",
        "tex": "f^{(n)}(a) = \\frac{n!}{2\\pi i} \\oint_\\gamma \\frac{f(z)}{(z-a)^{n+1}} \\, dz"
      },
      {
        "name": "Residue theorem",
        "tex": "\\oint_\\gamma f(z) \\, dz = 2\\pi i \\sum_{k} \\operatorname{Res}(f, a_k)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import cmath\n\n# Contour integral of 1/z around unit circle\nN = 1000\ntotal = 0.0\nfor k in range(N):\n    z = cmath.exp(2j * cmath.pi * k / N)\n    dz = 2j * cmath.pi * z / N\n    total += dz / z\nprint(total)  # ~ 2*pi*i"
      }
    ],
    "references": [
      {
        "title": "Complex Analysis",
        "author": "Lars Ahlfors",
        "source": "McGraw-Hill",
        "url": "https://en.wikipedia.org/wiki/Complex_Analysis_(Ahlfors)"
      },
      {
        "title": "Complex Analysis (Princeton Lectures in Analysis, Volume II)",
        "author": "Elias M. Stein and Rami Shakarchi",
        "source": "Princeton University Press",
        "url": "https://press.princeton.edu/books/hardcover/9780691113852/complex-analysis"
      }
    ],
    "tags": [
      "complex-variable",
      "contour-integration"
    ],
    "applications": []
  },
  {
    "id": "fourier-analysis",
    "title": "Fourier Analysis",
    "domain": "calculus",
    "difficulty": "advanced",
    "prerequisites": [
      "sequences-series",
      "integration",
      "complex-analysis"
    ],
    "related": [
      "partial-differential-equations",
      "transformers"
    ],
    "summary": "Fourier analysis decomposes functions into sinusoidal components. It underlies signal processing, PDEs, and many machine learning architectures.",
    "keyPoints": [
      "Fourier series represent periodic functions as sums of sines and cosines.",
      "The Fourier transform extends this to non-periodic functions.",
      "Convolution in time domain corresponds to multiplication in frequency domain."
    ],
    "formulas": [
      {
        "name": "Fourier transform",
        "tex": "\\hat{f}(\\xi) = \\int_{-\\infty}^{\\infty} f(x) e^{-2\\pi i x \\xi} \\, dx"
      },
      {
        "name": "Inverse Fourier transform",
        "tex": "f(x) = \\int_{-\\infty}^{\\infty} \\hat{f}(\\xi) e^{2\\pi i x \\xi} \\, d\\xi"
      },
      {
        "name": "Convolution theorem",
        "tex": "\\widehat{f * g} = \\hat{f} \\cdot \\hat{g}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nx = np.linspace(0, 2*np.pi, 256)\ny = np.sin(3*x) + 0.5*np.cos(7*x)\nY = np.fft.fft(y)\nprint(np.argmax(np.abs(Y[:128])))  # dominant frequency"
      }
    ],
    "references": [
      {
        "title": "Fourier Analysis: An Introduction (Princeton Lectures in Analysis, Volume I)",
        "author": "Elias M. Stein and Rami Shakarchi",
        "source": "Princeton University Press",
        "url": "https://press.princeton.edu/books/hardcover/9780691113845/fourier-analysis"
      },
      {
        "title": "The Fourier Transform and Its Applications",
        "author": "Ronald N. Bracewell",
        "source": "McGraw-Hill",
        "url": "https://www.goodreads.com/book/show/1997645.The_Fourier_Transform_and_Its_Applications"
      }
    ],
    "tags": [
      "frequency-domain",
      "signal-processing"
    ],
    "applications": [
      "transformers"
    ]
  },
  {
    "id": "vectors-matrices",
    "title": "Vectors and Matrices",
    "domain": "linear-algebra",
    "difficulty": "introductory",
    "prerequisites": [
      "limits-continuity"
    ],
    "related": [
      "linear-systems",
      "linear-transformations",
      "multivariable-calculus"
    ],
    "summary": "Vectors and matrices are the fundamental objects of linear algebra. Matrices encode linear transformations and systems of linear equations.",
    "keyPoints": [
      "Matrix multiplication corresponds to composition of linear transformations.",
      "The transpose swaps rows and columns; Hermitian transpose also conjugates complex entries.",
      "Special matrices (identity, diagonal, orthogonal) have useful computational properties."
    ],
    "formulas": [
      {
        "name": "Matrix-vector product",
        "tex": "(A\\mathbf{x})_i = \\sum_{j} A_{ij} x_j"
      },
      {
        "name": "Matrix product",
        "tex": "(AB)_{ij} = \\sum_{k} A_{ik} B_{kj}"
      },
      {
        "name": "Transpose",
        "tex": "(A^\\top)_{ij} = A_{ji}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nA = np.array([[1, 2], [3, 4]])\nx = np.array([5, 6])\nprint(A @ x)  # [17, 39]"
      }
    ],
    "references": [
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang",
        "source": "Wellesley-Cambridge Press",
        "url": "https://math.mit.edu/~gs/linearalgebra/"
      },
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler",
        "source": "Springer",
        "url": "https://linear.axler.net/"
      }
    ],
    "tags": [
      "foundations",
      "linear-algebra"
    ],
    "applications": []
  },
  {
    "id": "linear-systems",
    "title": "Systems of Linear Equations",
    "domain": "linear-algebra",
    "difficulty": "introductory",
    "prerequisites": [
      "vectors-matrices"
    ],
    "related": [
      "matrix-decompositions",
      "numerical-linear-algebra"
    ],
    "summary": "Solving linear systems is a core task in scientific computing. Gaussian elimination and matrix factorizations provide efficient and numerically stable methods.",
    "keyPoints": [
      "A system $A\\mathbf{x} = \\mathbf{b}$ has unique solutions when $A$ is invertible.",
      "Gaussian elimination with partial pivoting improves numerical stability.",
      "LU decomposition factorizes $A$ into lower and upper triangular matrices."
    ],
    "formulas": [
      {
        "name": "Linear system",
        "tex": "A\\mathbf{x} = \\mathbf{b}"
      },
      {
        "name": "LU factorization",
        "tex": "A = LU"
      },
      {
        "name": "Condition number",
        "tex": "\\kappa(A) = \\|A\\| \\|A^{-1}\\|"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nA = np.array([[2, 1], [1, 3]])\nb = np.array([4, 5])\nx = np.linalg.solve(A, b)\nprint(x)"
      }
    ],
    "references": [
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang",
        "source": "Wellesley-Cambridge Press",
        "url": "https://math.mit.edu/~gs/linearalgebra/"
      },
      {
        "title": "Numerical Linear Algebra",
        "author": "Lloyd N. Trefethen and David Bau III",
        "source": "SIAM",
        "url": "https://www.siam.org/publications/books/textbooks/numerical-linear-algebra"
      }
    ],
    "tags": [
      "systems",
      "gaussian-elimination"
    ],
    "applications": []
  },
  {
    "id": "vector-spaces",
    "title": "Vector Spaces",
    "domain": "linear-algebra",
    "difficulty": "intermediate",
    "prerequisites": [
      "vectors-matrices"
    ],
    "related": [
      "linear-transformations",
      "eigenvalues-eigenvectors",
      "inner-product-spaces"
    ],
    "summary": "Vector spaces abstract the notion of vectors to any set satisfying linearity axioms. This abstraction enables unified treatment of functions, sequences, and tensors.",
    "keyPoints": [
      "A vector space is closed under addition and scalar multiplication.",
      "Bases provide coordinate-independent representations; dimension is the size of any basis.",
      "Subspaces, span, linear independence, and basis are foundational concepts."
    ],
    "formulas": [
      {
        "name": "Subspace conditions",
        "tex": "U \\subseteq V \\text{ is a subspace if } \\mathbf{0} \\in U, \\text{ closed under addition and scalar multiplication.}"
      },
      {
        "name": "Dimension theorem",
        "tex": "\\dim(V) = \\dim(\\ker T) + \\dim(\\operatorname{im} T)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\n# Check if vectors span R^3 by rank\nA = np.array([[1, 2, 0], [0, 1, 1], [1, 0, 1]])\nprint(np.linalg.matrix_rank(A))  # 3 => span R^3"
      }
    ],
    "references": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler",
        "source": "Springer",
        "url": "https://linear.axler.net/"
      },
      {
        "title": "Finite-Dimensional Vector Spaces",
        "author": "Paul R. Halmos",
        "source": "Springer",
        "url": "https://link.springer.com/book/10.1007/978-1-4612-6387-6"
      }
    ],
    "tags": [
      "abstraction",
      "basis",
      "dimension"
    ],
    "applications": []
  },
  {
    "id": "linear-transformations",
    "title": "Linear Transformations",
    "domain": "linear-algebra",
    "difficulty": "intermediate",
    "prerequisites": [
      "vectors-matrices",
      "vector-spaces"
    ],
    "related": [
      "eigenvalues-eigenvectors",
      "matrix-decompositions",
      "neural-networks"
    ],
    "summary": "Linear transformations preserve vector addition and scalar multiplication. Every finite-dimensional linear map can be represented by a matrix, making algebra and geometry computable.",
    "keyPoints": [
      "Linear maps satisfy $T(u+v) = T(u) + T(v)$ and $T(cu) = cT(u)$.",
      "The rank-nullity theorem relates dimensions of kernel and image.",
      "Change of basis expresses the same transformation in different coordinate systems."
    ],
    "formulas": [
      {
        "name": "Linearity",
        "tex": "T(\\alpha u + \\beta v) = \\alpha T(u) + \\beta T(v)"
      },
      {
        "name": "Matrix representation",
        "tex": "[T(v)]_B = [T]_B [v]_B"
      },
      {
        "name": "Rank-nullity",
        "tex": "\\operatorname{rank}(T) + \\operatorname{nullity}(T) = \\dim(V)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nT = np.array([[1, 2], [3, 4], [5, 6]])\nprint('rank:', np.linalg.matrix_rank(T))\nprint('nullity:', T.shape[1] - np.linalg.matrix_rank(T))"
      }
    ],
    "references": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler",
        "source": "Springer",
        "url": "https://linear.axler.net/"
      },
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang",
        "source": "Wellesley-Cambridge Press",
        "url": "https://math.mit.edu/~gs/linearalgebra/"
      }
    ],
    "tags": [
      "linear-maps",
      "matrix-representation"
    ],
    "applications": [
      "neural-networks"
    ]
  },
  {
    "id": "eigenvalues-eigenvectors",
    "title": "Eigenvalues and Eigenvectors",
    "domain": "linear-algebra",
    "difficulty": "intermediate",
    "prerequisites": [
      "linear-transformations",
      "vector-spaces"
    ],
    "related": [
      "matrix-decompositions"
    ],
    "summary": "Eigenvalues and eigenvectors characterize the invariant directions of linear transformations. They are essential for stability analysis, dimensionality reduction, and graph methods.",
    "keyPoints": [
      "An eigenvector $v$ satisfies $Av = \\lambda v$.",
      "The characteristic polynomial $\\det(A - \\lambda I) = 0$ gives eigenvalues.",
      "Spectral theorem: symmetric matrices have real eigenvalues and orthogonal eigenvectors."
    ],
    "formulas": [
      {
        "name": "Eigenvalue equation",
        "tex": "A\\mathbf{v} = \\lambda \\mathbf{v}"
      },
      {
        "name": "Characteristic polynomial",
        "tex": "p(\\lambda) = \\det(A - \\lambda I)"
      },
      {
        "name": "Spectral theorem (symmetric)",
        "tex": "A = A^\\top \\implies A = Q\\Lambda Q^\\top"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nA = np.array([[4, 2], [1, 3]])\neigenvalues, eigenvectors = np.linalg.eig(A)\nprint(eigenvalues)\nprint(eigenvectors)"
      }
    ],
    "references": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler",
        "source": "Springer",
        "url": "https://linear.axler.net/"
      },
      {
        "title": "Introduction to Linear Algebra",
        "author": "Gilbert Strang",
        "source": "Wellesley-Cambridge Press",
        "url": "https://math.mit.edu/~gs/linearalgebra/"
      }
    ],
    "tags": [
      "spectral-theory",
      "stability"
    ],
    "applications": []
  },
  {
    "id": "inner-product-spaces",
    "title": "Inner Product Spaces",
    "domain": "linear-algebra",
    "difficulty": "intermediate",
    "prerequisites": [
      "vector-spaces"
    ],
    "related": [
      "eigenvalues-eigenvectors",
      "fourier-analysis"
    ],
    "summary": "Inner products generalize the dot product, allowing notions of length, angle, orthogonality, and projection. They are essential for Hilbert spaces and optimization.",
    "keyPoints": [
      "An inner product is linear, symmetric (or conjugate symmetric), and positive definite.",
      "Orthogonality and orthonormal bases simplify many computations.",
      "The projection onto a subspace minimizes the distance to that subspace."
    ],
    "formulas": [
      {
        "name": "Inner product axioms",
        "tex": "\\langle u, v \\rangle = \\overline{\\langle v, u \\rangle}, \\quad \\langle u, u \\rangle \\ge 0"
      },
      {
        "name": "Cauchy-Schwarz",
        "tex": "|\\langle u, v \\rangle| \\le \\|u\\| \\|v\\|"
      },
      {
        "name": "Projection",
        "tex": "\\operatorname{proj}_v u = \\frac{\\langle u, v \\rangle}{\\langle v, v \\rangle} v"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nu = np.array([1, 2, 3])\nv = np.array([1, 0, 1])\nproj = (np.dot(u, v) / np.dot(v, v)) * v\nprint(proj)"
      }
    ],
    "references": [
      {
        "title": "Linear Algebra Done Right",
        "author": "Sheldon Axler",
        "source": "Springer",
        "url": "https://linear.axler.net/"
      },
      {
        "title": "Introduction to Hilbert Space",
        "author": "James R. Retherford",
        "source": "Dover",
        "url": "https://store.doverpublications.com/0486822375.html"
      }
    ],
    "tags": [
      "inner-product",
      "orthogonality",
      "projection"
    ],
    "applications": [
      "fourier-analysis"
    ]
  },
  {
    "id": "matrix-decompositions",
    "title": "Matrix Decompositions",
    "domain": "linear-algebra",
    "difficulty": "advanced",
    "prerequisites": [
      "linear-systems",
      "eigenvalues-eigenvectors",
      "inner-product-spaces"
    ],
    "related": [
      "numerical-linear-algebra"
    ],
    "summary": "Matrix decompositions factor matrices into simpler, structured pieces. They enable efficient and stable solutions to linear systems, least squares, eigenproblems, and compression.",
    "keyPoints": [
      "LU decomposition solves linear systems by triangular substitution.",
      "QR decomposition is numerically stable for least squares.",
      "SVD reveals rank, principal components, and best low-rank approximations."
    ],
    "formulas": [
      {
        "name": "LU",
        "tex": "A = LU"
      },
      {
        "name": "QR",
        "tex": "A = QR"
      },
      {
        "name": "SVD",
        "tex": "A = U\\Sigma V^\\top"
      },
      {
        "name": "Eckart-Young-Mirsky",
        "tex": "\\min_{\\operatorname{rank}(B) \\le k} \\|A-B\\|_2 = \\sigma_{k+1}(A)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nA = np.random.randn(5, 3)\nU, s, Vt = np.linalg.svd(A)\n# Best rank-2 approximation\nA2 = U[:, :2] @ np.diag(s[:2]) @ Vt[:2, :]\nprint(np.linalg.norm(A - A2, 2))  # ~ sigma_3"
      }
    ],
    "references": [
      {
        "title": "Numerical Linear Algebra",
        "author": "Lloyd N. Trefethen and David Bau III",
        "source": "SIAM",
        "url": "https://www.siam.org/publications/books/textbooks/numerical-linear-algebra"
      },
      {
        "title": "Matrix Computations",
        "author": "Gene H. Golub and Charles F. Van Loan",
        "source": "Johns Hopkins University Press",
        "url": "https://www.press.jhu.edu/books/title/9781421407944/matrix-computations"
      }
    ],
    "tags": [
      "factorization",
      "svd",
      "qr",
      "lu"
    ],
    "applications": [
      "transformers",
      "neural-networks"
    ]
  },
  {
    "id": "tensors",
    "title": "Tensors and Multilinear Algebra",
    "domain": "linear-algebra",
    "difficulty": "advanced",
    "prerequisites": [
      "vectors-matrices",
      "linear-transformations"
    ],
    "related": [
      "matrix-decompositions",
      "neural-networks",
      "transformers"
    ],
    "summary": "Tensors generalize scalars, vectors, and matrices to multiway arrays. Tensor decompositions and contractions are used in deep learning, physics, and data analysis.",
    "keyPoints": [
      "Tensors are multilinear maps from vector spaces to the scalar field.",
      "Tensor contractions generalize matrix multiplication and traces.",
      "CP and Tucker decompositions compress high-dimensional data."
    ],
    "formulas": [
      {
        "name": "Tensor product",
        "tex": "(a \\otimes b)_{ij} = a_i b_j"
      },
      {
        "name": "Contraction",
        "tex": "C_{ij} = \\sum_{k} A_{ikj} B_{k}"
      },
      {
        "name": "CP decomposition",
        "tex": "\\mathcal{X} \\approx \\sum_{r=1}^R \\lambda_r \\mathbf{a}_r \\circ \\mathbf{b}_r \\circ \\mathbf{c}_r"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nA = np.random.rand(3, 4, 5)\nB = np.random.rand(5)\n# Contract over the last mode\nC = np.tensordot(A, B, axes=([2], [0]))\nprint(C.shape)  # (3, 4)"
      }
    ],
    "references": [
      {
        "title": "Tensor Decompositions and Applications",
        "author": "Tamara G. Kolda and Brett W. Bader",
        "source": "SIAM Review",
        "url": "https://doi.org/10.1137/07070111X"
      },
      {
        "title": "Multilinear Algebra",
        "author": "Werner H. Greub",
        "source": "Springer",
        "url": "https://link.springer.com/book/10.1007/978-1-4612-1079-5"
      }
    ],
    "tags": [
      "multiway",
      "tensor-decomposition"
    ],
    "applications": []
  },
  {
    "id": "probability-axioms",
    "title": "Probability Axioms",
    "domain": "probability-statistics",
    "difficulty": "introductory",
    "prerequisites": [
      "sequences-series",
      "integration"
    ],
    "related": [
      "random-variables",
      "statistical-inference"
    ],
    "summary": "Probability theory is built on measure-theoretic axioms: a sample space, events, and a probability measure satisfying countable additivity. These foundations support all stochastic modeling.",
    "keyPoints": [
      "Kolmogorov's axioms define probability as a measure on a sigma-algebra.",
      "Conditional probability and independence are derived from the axioms.",
      "The law of total probability and Bayes' theorem follow from these rules."
    ],
    "formulas": [
      {
        "name": "Axioms",
        "tex": "P(A) \\ge 0, \\quad P(\\Omega) = 1, \\quad P(\\bigcup_{i} A_i) = \\sum_i P(A_i) \\text{ for disjoint } A_i"
      },
      {
        "name": "Conditional probability",
        "tex": "P(A|B) = \\frac{P(A \\cap B)}{P(B)}"
      },
      {
        "name": "Bayes' theorem",
        "tex": "P(A|B) = \\frac{P(B|A)P(A)}{P(B)}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "# Estimate P(A|B) by counting\nimport numpy as np\nsamples = np.random.rand(10000)\nA = samples < 0.3\nB = samples < 0.5\nprint(A[B].mean())  # ~ 0.6"
      }
    ],
    "references": [
      {
        "title": "Probability and Measure",
        "author": "Patrick Billingsley",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Probability+and+Measure%2C+Anniversary+Edition-p-9781118122372"
      },
      {
        "title": "A First Course in Probability",
        "author": "Sheldon Ross",
        "source": "Pearson",
        "url": "https://www.pearson.com/en-us/subject-catalog/p/first-course-in-probability/P200000005331"
      }
    ],
    "tags": [
      "foundations",
      "measure-theory"
    ],
    "applications": [
      "statistical-inference"
    ]
  },
  {
    "id": "random-variables",
    "title": "Random Variables",
    "domain": "probability-statistics",
    "difficulty": "introductory",
    "prerequisites": [
      "probability-axioms"
    ],
    "related": [
      "distributions",
      "expectation-variance",
      "stochastic-processes"
    ],
    "summary": "Random variables are measurable functions from a sample space to the real numbers. They encode uncertainty in quantitative form and are the building blocks of statistical models.",
    "keyPoints": [
      "A random variable induces a probability distribution on the real line.",
      "Discrete variables are described by probability mass functions; continuous by densities.",
      "Transformations of random variables require careful handling of the measure."
    ],
    "formulas": [
      {
        "name": "Cumulative distribution function",
        "tex": "F_X(x) = P(X \\le x)"
      },
      {
        "name": "Probability density function",
        "tex": "F_X(x) = \\int_{-\\infty}^x f_X(t) \\, dt"
      },
      {
        "name": "Expectation",
        "tex": "\\mathbb{E}[X] = \\int x \\, dF_X(x)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nX = np.random.randn(10000)\nprint(X.mean(), X.var())"
      }
    ],
    "references": [
      {
        "title": "Probability and Measure",
        "author": "Patrick Billingsley",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Probability+and+Measure%2C+Anniversary+Edition-p-9781118122372"
      },
      {
        "title": "Introduction to Probability Models",
        "author": "Sheldon Ross",
        "source": "Academic Press",
        "url": "https://www.elsevier.com/books/introduction-to-probability-models/ross/978-0-12-407948-9"
      }
    ],
    "tags": [
      "random-variables",
      "distributions"
    ],
    "applications": [
      "black-scholes"
    ]
  },
  {
    "id": "distributions",
    "title": "Common Probability Distributions",
    "domain": "probability-statistics",
    "difficulty": "introductory",
    "prerequisites": [
      "random-variables"
    ],
    "related": [
      "expectation-variance",
      "statistical-inference",
      "stochastic-processes"
    ],
    "summary": "Probability distributions encode the behavior of random variables. The Gaussian, binomial, Poisson, and exponential distributions appear throughout science and machine learning.",
    "keyPoints": [
      "The Gaussian distribution is the maximum-entropy distribution for fixed mean and variance.",
      "The exponential distribution is memoryless and models waiting times.",
      "The central limit theorem explains the ubiquity of Gaussian distributions."
    ],
    "formulas": [
      {
        "name": "Gaussian PDF",
        "tex": "f(x) = \\frac{1}{\\sqrt{2\\pi}\\sigma} \\exp\\left(-\\frac{(x-\\mu)^2}{2\\sigma^2}\\right)"
      },
      {
        "name": "Binomial PMF",
        "tex": "P(X=k) = \\binom{n}{k} p^k (1-p)^{n-k}"
      },
      {
        "name": "Poisson PMF",
        "tex": "P(X=k) = \\frac{\\lambda^k e^{-\\lambda}}{k!}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy import stats\n\nX = stats.norm(loc=0, scale=1)\nprint(X.pdf(0.0))  # 0.3989...\nprint(X.cdf(1.96))  # ~ 0.975"
      }
    ],
    "references": [
      {
        "title": "All of Statistics",
        "author": "Larry Wasserman",
        "source": "Springer",
        "url": "https://www.stat.cmu.edu/~larry/all-of-statistics/index.html"
      },
      {
        "title": "Probability and Statistics for Engineers and Scientists",
        "author": "Ronald E. Walpole et al.",
        "source": "Pearson",
        "url": "https://www.pearson.com/en-us/subject-catalog/p/probability-and-statistics-for-engineers-and-scientists/P200000005792"
      }
    ],
    "tags": [
      "distributions",
      "gaussian"
    ],
    "applications": []
  },
  {
    "id": "expectation-variance",
    "title": "Expectation, Variance, and Moments",
    "domain": "probability-statistics",
    "difficulty": "introductory",
    "prerequisites": [
      "random-variables",
      "integration"
    ],
    "related": [
      "distributions",
      "statistical-inference",
      "linear-regression"
    ],
    "summary": "Expectation summarizes the center of a distribution; variance measures spread. Higher moments and moment-generating functions characterize shape and convergence.",
    "keyPoints": [
      "Expectation is linear even when variables are dependent.",
      "Variance is $\\operatorname{Var}(X) = \\mathbb{E}[(X-\\mu)^2]$.",
      "Covariance measures linear association between two random variables."
    ],
    "formulas": [
      {
        "name": "Variance",
        "tex": "\\operatorname{Var}(X) = \\mathbb{E}[X^2] - (\\mathbb{E}[X])^2"
      },
      {
        "name": "Covariance",
        "tex": "\\operatorname{Cov}(X,Y) = \\mathbb{E}[(X-\\mu_X)(Y-\\mu_Y)]"
      },
      {
        "name": "Chebyshev's inequality",
        "tex": "P(|X-\\mu| \\ge k\\sigma) \\le \\frac{1}{k^2}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nX = np.random.randn(10000)\nY = 2*X + np.random.randn(10000)\nprint(np.cov(X, Y))"
      }
    ],
    "references": [
      {
        "title": "All of Statistics",
        "author": "Larry Wasserman",
        "source": "Springer",
        "url": "https://www.stat.cmu.edu/~larry/all-of-statistics/index.html"
      },
      {
        "title": "Probability and Random Processes",
        "author": "Geoffrey Grimmett and David Stirzaker",
        "source": "Oxford University Press",
        "url": "https://global.oup.com/academic/product/probability-and-random-processes-9780198847576"
      }
    ],
    "tags": [
      "moments",
      "variance",
      "covariance"
    ],
    "applications": [
      "portfolio-optimization",
      "linear-regression"
    ]
  },
  {
    "id": "statistical-inference",
    "title": "Statistical Inference",
    "domain": "probability-statistics",
    "difficulty": "intermediate",
    "prerequisites": [
      "probability-axioms",
      "random-variables",
      "distributions",
      "expectation-variance"
    ],
    "related": [
      "linear-regression"
    ],
    "summary": "Statistical inference draws conclusions about populations from data. Estimation, confidence intervals, and hypothesis testing provide the framework for data-driven decisions.",
    "keyPoints": [
      "Maximum likelihood estimation finds parameters that maximize the likelihood of observed data.",
      "The bias-variance decomposition explains model error.",
      "Bayesian inference updates beliefs via the posterior distribution."
    ],
    "formulas": [
      {
        "name": "Maximum likelihood",
        "tex": "\\hat{\\theta}_{MLE} = \\arg\\max_\\theta \\prod_{i=1}^n p(x_i | \\theta)"
      },
      {
        "name": "Bayes' theorem for parameters",
        "tex": "p(\\theta | \\mathcal{D}) = \\frac{p(\\mathcal{D}|\\theta)p(\\theta)}{p(\\mathcal{D})}"
      },
      {
        "name": "Bias-variance decomposition",
        "tex": "\\mathbb{E}[(y - \\hat{f}(x))^2] = \\text{Bias}^2 + \\text{Variance} + \\sigma^2"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy import stats\n\ndata = stats.norm.rvs(loc=5, scale=2, size=100)\nmu_mle, sigma_mle = stats.norm.fit(data)\nprint(mu_mle, sigma_mle)"
      }
    ],
    "references": [
      {
        "title": "All of Statistics",
        "author": "Larry Wasserman",
        "source": "Springer",
        "url": "https://www.stat.cmu.edu/~larry/all-of-statistics/index.html"
      },
      {
        "title": "Statistical Inference",
        "author": "George Casella and Roger L. Berger",
        "source": "Cengage",
        "url": "https://www.cengage.com/c/statistical-inference-2e-casella/9780534243128"
      }
    ],
    "tags": [
      "estimation",
      "inference",
      "mle",
      "bayesian"
    ],
    "applications": [
      "linear-regression",
      "logistic-regression"
    ]
  },
  {
    "id": "stochastic-processes",
    "title": "Stochastic Processes",
    "domain": "probability-statistics",
    "difficulty": "advanced",
    "prerequisites": [
      "random-variables",
      "distributions",
      "expectation-variance"
    ],
    "related": [
      "brownian-motion",
      "time-series"
    ],
    "summary": "Stochastic processes model systems evolving randomly over time or space. They are essential for finance, physics, operations research, and reinforcement learning.",
    "keyPoints": [
      "A stochastic process is a collection of random variables indexed by time or space.",
      "Markov processes have memoryless future given the present.",
      "Martingales model fair games and are central to stochastic calculus."
    ],
    "formulas": [
      {
        "name": "Markov property",
        "tex": "P(X_{t+1} | X_t, X_{t-1}, \\dots) = P(X_{t+1} | X_t)"
      },
      {
        "name": "Martingale",
        "tex": "\\mathbb{E}[X_{t+1} | \\mathcal{F}_t] = X_t"
      },
      {
        "name": "AR(1) process",
        "tex": "X_t = \\phi X_{t-1} + \\varepsilon_t"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nT = 1000\nX = np.zeros(T)\nfor t in range(1, T):\n    X[t] = 0.9 * X[t-1] + np.random.randn()\nprint(X.mean(), X.var())  # var ~ 1/(1-0.9^2) = 5.26"
      }
    ],
    "references": [
      {
        "title": "Stochastic Processes",
        "author": "Sheldon Ross",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Stochastic+Processes%2C+2nd+Edition-p-9780471120626"
      },
      {
        "title": "Introduction to Stochastic Processes",
        "author": "Gregory F. Lawler",
        "source": "Chapman and Hall/CRC",
        "url": "https://www.routledge.com/Introduction-to-Stochastic-Processes/Lawler/p/book/9781584886518"
      }
    ],
    "tags": [
      "random-processes",
      "markov",
      "martingales"
    ],
    "applications": []
  },
  {
    "id": "convex-optimization",
    "title": "Convex Sets and Functions",
    "domain": "optimization",
    "difficulty": "intermediate",
    "prerequisites": [
      "multivariable-calculus",
      "vectors-matrices"
    ],
    "related": [
      "gradient-descent",
      "newtons-method",
      "constrained-optimization"
    ],
    "summary": "Convex optimization problems have the property that any local minimum is a global minimum. This makes them tractable and foundational for machine learning, control, and finance.",
    "keyPoints": [
      "A set is convex if the line segment between any two points lies in the set.",
      "A function is convex if its epigraph is a convex set, equivalently $f(\\lambda x + (1-\\lambda)y) \\le \\lambda f(x) + (1-\\lambda)f(y)$.",
      "Convex problems can be solved efficiently with interior-point methods and first-order methods."
    ],
    "formulas": [
      {
        "name": "Convex function",
        "tex": "f(\\lambda x + (1-\\lambda) y) \\le \\lambda f(x) + (1-\\lambda) f(y), \\quad \\lambda \\in [0,1]"
      },
      {
        "name": "Convex set",
        "tex": "x, y \\in C \\implies \\lambda x + (1-\\lambda) y \\in C"
      },
      {
        "name": "Jensen's inequality",
        "tex": "f(\\mathbb{E}[X]) \\le \\mathbb{E}[f(X)] \\text{ for convex } f"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\ndef f(x):\n    return x**2  # convex\n\ndef check_convex(f, x, y, lam):\n    return f(lam*x + (1-lam)*y) <= lam*f(x) + (1-lam)*f(y)\n\nprint(check_convex(f, -1.0, 2.0, 0.5))  # True"
      }
    ],
    "references": [
      {
        "title": "Convex Optimization",
        "author": "Stephen Boyd and Lieven Vandenberghe",
        "source": "Cambridge University Press",
        "url": "https://web.stanford.edu/~boyd/cvxbook/"
      },
      {
        "title": "Convex Analysis",
        "author": "Ralph T. Rockafellar",
        "source": "Princeton University Press",
        "url": "https://press.princeton.edu/books/paperback/9780691015866/convex-analysis"
      }
    ],
    "tags": [
      "convexity",
      "global-optimum"
    ],
    "applications": []
  },
  {
    "id": "gradient-descent",
    "title": "Gradient Descent",
    "domain": "optimization",
    "difficulty": "intermediate",
    "prerequisites": [
      "differentiation",
      "multivariable-calculus",
      "convex-optimization"
    ],
    "related": [
      "newtons-method"
    ],
    "summary": "Gradient descent iteratively moves in the direction of the negative gradient to minimize a function. It is the workhorse of modern machine learning optimization.",
    "keyPoints": [
      "For convex Lipschitz-smooth functions, gradient descent converges at rate $O(1/k)$.",
      "Step size (learning rate) selection strongly affects convergence.",
      "Momentum, AdaGrad, and Adam adapt the update direction or step size."
    ],
    "formulas": [
      {
        "name": "Gradient descent update",
        "tex": "x_{k+1} = x_k - \\eta \\nabla f(x_k)"
      },
      {
        "name": "Convergence rate (convex, L-smooth)",
        "tex": "f(x_k) - f^* \\le \\frac{2L\\|x_0 - x^*\\|^2}{k}"
      },
      {
        "name": "Momentum",
        "tex": "v_{k+1} = \\beta v_k + \\nabla f(x_k), \\quad x_{k+1} = x_k - \\eta v_{k+1}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\ndef grad_f(x):\n    return 2*x + 4  # f(x) = x^2 + 4x\n\nx = 0.0\neta = 0.1\nfor _ in range(50):\n    x -= eta * grad_f(x)\nprint(x)  # ~ -2"
      }
    ],
    "references": [
      {
        "title": "Convex Optimization",
        "author": "Stephen Boyd and Lieven Vandenberghe",
        "source": "Cambridge University Press",
        "url": "https://web.stanford.edu/~boyd/cvxbook/"
      },
      {
        "title": "Optimization Methods for Large-Scale Machine Learning",
        "author": "Léon Bottou, Frank E. Curtis, and Jorge Nocedal",
        "source": "SIAM Review",
        "url": "https://doi.org/10.1137/16M1080173"
      }
    ],
    "tags": [
      "first-order-methods",
      "iterative"
    ],
    "applications": [
      "neural-networks"
    ]
  },
  {
    "id": "newtons-method",
    "title": "Newton's Method",
    "domain": "optimization",
    "difficulty": "advanced",
    "prerequisites": [
      "gradient-descent",
      "differentiation",
      "linear-systems"
    ],
    "related": [
      "numerical-optimization"
    ],
    "summary": "Newton's method uses second-order information (the Hessian) to achieve faster local convergence. It is foundational for interior-point methods and scientific computing.",
    "keyPoints": [
      "Newton's method solves $\\nabla f(x) = 0$ using local quadratic approximations.",
      "For strongly convex functions with Lipschitz Hessian, convergence is quadratic near the optimum.",
      "Quasi-Newton methods (L-BFGS) approximate the Hessian to reduce cost."
    ],
    "formulas": [
      {
        "name": "Newton update",
        "tex": "x_{k+1} = x_k - [\\nabla^2 f(x_k)]^{-1} \\nabla f(x_k)"
      },
      {
        "name": "Quadratic model",
        "tex": "m_k(p) = f(x_k) + \\nabla f(x_k)^\\top p + \\frac{1}{2} p^\\top \\nabla^2 f(x_k) p"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\ndef f(x):\n    return x**2 + 4*x + 4\n\ndef grad_f(x):\n    return 2*x + 4\n\ndef hess_f(x):\n    return 2.0\n\nx = 0.0\nfor _ in range(5):\n    x -= grad_f(x) / hess_f(x)\nprint(x)  # -2 (exact in one step)"
      }
    ],
    "references": [
      {
        "title": "Numerical Optimization",
        "author": "Jorge Nocedal and Stephen J. Wright",
        "source": "Springer",
        "url": "https://www.springer.com/gp/book/9780387303031"
      },
      {
        "title": "Convex Optimization",
        "author": "Stephen Boyd and Lieven Vandenberghe",
        "source": "Cambridge University Press",
        "url": "https://web.stanford.edu/~boyd/cvxbook/"
      }
    ],
    "tags": [
      "second-order-methods",
      "hessian"
    ],
    "applications": [
      "numerical-optimization",
      "logistic-regression"
    ]
  },
  {
    "id": "constrained-optimization",
    "title": "Constrained Optimization and KKT Conditions",
    "domain": "optimization",
    "difficulty": "advanced",
    "prerequisites": [
      "convex-optimization",
      "multivariable-calculus",
      "linear-systems"
    ],
    "related": [
      "numerical-optimization",
      "portfolio-optimization"
    ],
    "summary": "Constrained optimization minimizes an objective subject to equality and inequality constraints. Lagrange multipliers and the Karush-Kuhn-Tucker (KKT) conditions characterize optimality.",
    "keyPoints": [
      "Lagrange multipliers handle equality constraints via the Lagrangian.",
      "KKT conditions generalize Lagrange multipliers to inequality constraints.",
      "Slater's condition guarantees strong duality for convex problems."
    ],
    "formulas": [
      {
        "name": "Lagrangian",
        "tex": "\\mathcal{L}(x, \\lambda, \\nu) = f(x) + \\sum_i \\lambda_i g_i(x) + \\sum_j \\nu_j h_j(x)"
      },
      {
        "name": "KKT conditions",
        "tex": "\\nabla_x \\mathcal{L} = 0, \\quad g_i(x) \\le 0, \\quad \\lambda_i \\ge 0, \\quad \\lambda_i g_i(x) = 0"
      },
      {
        "name": "Strong duality (Slater)",
        "tex": "\\text{For convex problems with a strictly feasible point, } p^* = d^*"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy.optimize import minimize\n\ndef f(x):\n    return x[0]**2 + x[1]**2\n\ncons = {'type': 'eq', 'fun': lambda x: x[0] + x[1] - 1}\nres = minimize(f, [0, 0], constraints=cons)\nprint(res.x)  # [0.5, 0.5]"
      }
    ],
    "references": [
      {
        "title": "Convex Optimization",
        "author": "Stephen Boyd and Lieven Vandenberghe",
        "source": "Cambridge University Press",
        "url": "https://web.stanford.edu/~boyd/cvxbook/"
      },
      {
        "title": "Nonlinear Programming",
        "author": "Dimitri P. Bertsekas",
        "source": "Athena Scientific",
        "url": "https://www.athenasc.com/nonlinbook.html"
      }
    ],
    "tags": [
      "constraints",
      "lagrange",
      "kkt",
      "duality"
    ],
    "applications": [
      "portfolio-optimization"
    ]
  },
  {
    "id": "numerical-optimization",
    "title": "Numerical Optimization",
    "domain": "optimization",
    "difficulty": "advanced",
    "prerequisites": [
      "gradient-descent",
      "newtons-method",
      "constrained-optimization"
    ],
    "related": [],
    "summary": "Numerical optimization develops algorithms for finding minima or maxima of functions when closed-form solutions are unavailable. It balances convergence, stability, and computational cost.",
    "keyPoints": [
      "Line search methods ensure sufficient decrease at each step.",
      "Trust-region methods model the objective locally and restrict step size.",
      "Stochastic and distributed variants scale optimization to massive datasets."
    ],
    "formulas": [
      {
        "name": "Wolfe conditions",
        "tex": "f(x_k + \\alpha p_k) \\le f(x_k) + c_1 \\alpha \\nabla f_k^\\top p_k, \\quad \\nabla f(x_k + \\alpha p_k)^\\top p_k \\ge c_2 \\nabla f_k^\\top p_k"
      },
      {
        "name": "Trust-region subproblem",
        "tex": "\\min_{\\|p\\| \\le \\Delta} m_k(p)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy.optimize import minimize\n\nres = minimize(lambda x: x[0]**2 + 10*x[1]**2, [1.0, 1.0], method='BFGS')\nprint(res.x)  # ~ [0, 0]"
      }
    ],
    "references": [
      {
        "title": "Numerical Optimization",
        "author": "Jorge Nocedal and Stephen J. Wright",
        "source": "Springer",
        "url": "https://www.springer.com/gp/book/9780387303031"
      },
      {
        "title": "Introduction to Nonlinear Optimization",
        "author": "Amir Beck",
        "source": "SIAM",
        "url": "https://www.siam.org/publications/books/textbooks/ot153"
      }
    ],
    "tags": [
      "algorithms",
      "line-search",
      "trust-region"
    ],
    "applications": []
  },
  {
    "id": "linear-regression",
    "title": "Linear Regression",
    "domain": "machine-learning",
    "difficulty": "intermediate",
    "prerequisites": [
      "multivariable-calculus",
      "inner-product-spaces",
      "expectation-variance"
    ],
    "related": [
      "logistic-regression",
      "statistical-inference",
      "gradient-descent"
    ],
    "summary": "Linear regression models the relationship between a dependent variable and one or more independent variables via a linear function. The least-squares estimator has a closed-form solution and rich statistical properties.",
    "keyPoints": [
      "The ordinary least squares (OLS) estimator minimizes the residual sum of squares.",
      "Under the Gauss-Markov assumptions, OLS is the best linear unbiased estimator (BLUE).",
      "Regularization (Ridge, Lasso) trades bias for variance and improves generalization."
    ],
    "formulas": [
      {
        "name": "OLS estimator",
        "tex": "\\hat{\\beta} = (X^\\top X)^{-1} X^\\top y"
      },
      {
        "name": "Ridge regression",
        "tex": "\\hat{\\beta}_{ridge} = \\arg\\min_\\beta \\|y - X\\beta\\|^2 + \\lambda \\|\\beta\\|^2"
      },
      {
        "name": "Prediction",
        "tex": "\\hat{y} = X \\hat{\\beta}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nX = np.random.randn(100, 3)\ny = X @ np.array([1, -2, 3]) + 0.1*np.random.randn(100)\nbeta = np.linalg.lstsq(X, y, rcond=None)[0]\nprint(beta)"
      }
    ],
    "references": [
      {
        "title": "The Elements of Statistical Learning",
        "author": "Trevor Hastie, Robert Tibshirani, and Jerome Friedman",
        "source": "Springer",
        "url": "https://hastie.su.domains/ElemStatLearn/"
      },
      {
        "title": "Pattern Recognition and Machine Learning",
        "author": "Christopher M. Bishop",
        "source": "Springer",
        "url": "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/"
      }
    ],
    "tags": [
      "supervised-learning",
      "least-squares",
      "regression"
    ],
    "applications": []
  },
  {
    "id": "logistic-regression",
    "title": "Logistic Regression",
    "domain": "machine-learning",
    "difficulty": "intermediate",
    "prerequisites": [
      "linear-regression",
      "statistical-inference",
      "convex-optimization"
    ],
    "related": [
      "neural-networks",
      "gradient-descent",
      "newtons-method"
    ],
    "summary": "Logistic regression models binary probabilities using the logistic function. It is a convex classification method and a building block for neural networks.",
    "keyPoints": [
      "The logistic (sigmoid) function maps real values to (0,1).",
      "Maximum likelihood estimation yields a convex optimization problem.",
      "Newton's method (iteratively reweighted least squares) solves it efficiently."
    ],
    "formulas": [
      {
        "name": "Sigmoid",
        "tex": "\\sigma(z) = \\frac{1}{1 + e^{-z}}"
      },
      {
        "name": "Log-odds",
        "tex": "\\log \\frac{p}{1-p} = X\\beta"
      },
      {
        "name": "Log-likelihood",
        "tex": "\\ell(\\beta) = \\sum_{i=1}^n y_i X_i^\\top \\beta - \\log(1 + e^{X_i^\\top \\beta})"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from sklearn.linear_model import LogisticRegression\n\n# X: features, y: binary labels\nclf = LogisticRegression().fit(X, y)\nprint(clf.coef_)"
      }
    ],
    "references": [
      {
        "title": "The Elements of Statistical Learning",
        "author": "Trevor Hastie, Robert Tibshirani, and Jerome Friedman",
        "source": "Springer",
        "url": "https://hastie.su.domains/ElemStatLearn/"
      },
      {
        "title": "Pattern Recognition and Machine Learning",
        "author": "Christopher M. Bishop",
        "source": "Springer",
        "url": "https://www.microsoft.com/en-us/research/publication/pattern-recognition-machine-learning/"
      }
    ],
    "tags": [
      "classification",
      "generalized-linear-models"
    ],
    "applications": []
  },
  {
    "id": "neural-networks",
    "title": "Neural Networks and Backpropagation",
    "domain": "machine-learning",
    "difficulty": "advanced",
    "prerequisites": [
      "linear-regression",
      "logistic-regression",
      "gradient-descent",
      "multivariable-calculus"
    ],
    "related": [
      "transformers",
      "convolutional-neural-networks",
      "recurrent-neural-networks"
    ],
    "summary": "Neural networks are compositions of parameterized nonlinear functions. Backpropagation efficiently computes gradients using the chain rule, enabling training of deep models.",
    "keyPoints": [
      "A feedforward network computes $f(x) = W_L \\sigma(W_{L-1} \\cdots \\sigma(W_1 x + b_1) \\cdots + b_{L-1}) + b_L$.",
      "Backpropagation applies the chain rule from outputs to inputs.",
      "Universal approximation theorems show that neural networks can represent broad function classes."
    ],
    "formulas": [
      {
        "name": "Layer",
        "tex": "z^{[l]} = W^{[l]} a^{[l-1]} + b^{[l]}, \\quad a^{[l]} = \\sigma(z^{[l]})"
      },
      {
        "name": "Loss gradient",
        "tex": "\\frac{\\partial L}{\\partial W^{[l]}} = \\delta^{[l]} (a^{[l-1]})^\\top"
      },
      {
        "name": "Chain rule",
        "tex": "\\frac{\\partial L}{\\partial W^{[l]}} = \\frac{\\partial L}{\\partial a^{[L]}} \\frac{\\partial a^{[L]}}{\\partial z^{[L]}} \\cdots \\frac{\\partial z^{[l]}}{\\partial W^{[l]}}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import torch\n\nmodel = torch.nn.Sequential(\n    torch.nn.Linear(10, 64),\n    torch.nn.ReLU(),\n    torch.nn.Linear(64, 1)\n)\nloss_fn = torch.nn.MSELoss()\noptimizer = torch.optim.SGD(model.parameters(), lr=0.01)\n\n# Forward + backward pass\nout = model(x)\nloss = loss_fn(out, y)\nloss.backward()\noptimizer.step()"
      }
    ],
    "references": [
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
        "source": "MIT Press",
        "url": "https://www.deeplearningbook.org/"
      },
      {
        "title": "Neural Networks and Deep Learning",
        "author": "Michael Nielsen",
        "source": "Online book",
        "url": "http://neuralnetworksanddeeplearning.com/"
      }
    ],
    "tags": [
      "deep-learning",
      "chain-rule",
      "universal-approximation"
    ],
    "applications": []
  },
  {
    "id": "convolutional-neural-networks",
    "title": "Convolutional Neural Networks",
    "domain": "machine-learning",
    "difficulty": "advanced",
    "prerequisites": [
      "neural-networks",
      "fourier-analysis"
    ],
    "related": [
      "transformers",
      "tensors"
    ],
    "summary": "Convolutional neural networks exploit spatial structure via convolution and pooling. They are the dominant architecture for image and video processing.",
    "keyPoints": [
      "Convolution applies a learned filter locally across the input.",
      "Weight sharing reduces parameters and encodes translation equivariance.",
      "Pooling provides local translation invariance and downsampling."
    ],
    "formulas": [
      {
        "name": "2D convolution",
        "tex": "(I * K)(i,j) = \\sum_m \\sum_n I(i+m, j+n) K(m,n)"
      },
      {
        "name": "Backprop through convolution",
        "tex": "\\frac{\\partial L}{\\partial K} = I * \\frac{\\partial L}{\\partial O}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import torch.nn as nn\n\nconv = nn.Conv2d(in_channels=3, out_channels=16, kernel_size=3, padding=1)\npool = nn.MaxPool2d(kernel_size=2)\nout = pool(conv(image_tensor))"
      }
    ],
    "references": [
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
        "source": "MIT Press",
        "url": "https://www.deeplearningbook.org/"
      },
      {
        "title": "ImageNet Classification with Deep Convolutional Neural Networks",
        "author": "Alex Krizhevsky, Ilya Sutskever, and Geoffrey Hinton",
        "source": "NIPS 2012",
        "url": "https://papers.nips.cc/paper/2012/hash/c399862d3b9d6b76c8436e924a68c45b-Abstract.html"
      }
    ],
    "tags": [
      "cnn",
      "computer-vision",
      "convolution"
    ],
    "applications": []
  },
  {
    "id": "recurrent-neural-networks",
    "title": "Recurrent Neural Networks",
    "domain": "machine-learning",
    "difficulty": "advanced",
    "prerequisites": [
      "neural-networks",
      "ordinary-differential-equations"
    ],
    "related": [
      "transformers",
      "stochastic-processes",
      "time-series"
    ],
    "summary": "Recurrent neural networks process sequential data by maintaining hidden state. They connect to dynamical systems and have been largely superseded by Transformers for many sequence tasks.",
    "keyPoints": [
      "RNNs update hidden state recursively: $h_t = \\sigma(W_{hh} h_{t-1} + W_{xh} x_t + b)$.",
      "LSTM and GRU architectures mitigate vanishing gradients.",
      "RNNs are universal approximators of dynamical systems."
    ],
    "formulas": [
      {
        "name": "RNN hidden state",
        "tex": "h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)"
      },
      {
        "name": "LSTM cell state",
        "tex": "c_t = f_t \\odot c_{t-1} + i_t \\odot \\tilde{c}_t"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import torch.nn as nn\n\nrnn = nn.LSTM(input_size=10, hidden_size=20, num_layers=2, batch_first=True)\nout, (hn, cn) = rnn(sequence)"
      }
    ],
    "references": [
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
        "source": "MIT Press",
        "url": "https://www.deeplearningbook.org/"
      },
      {
        "title": "Long Short-Term Memory",
        "author": "Sepp Hochreiter and Jürgen Schmidhuber",
        "source": "Neural Computation, 1997",
        "url": "https://doi.org/10.1162/neco.1997.9.8.1735"
      }
    ],
    "tags": [
      "rnn",
      "sequences",
      "lstm"
    ],
    "applications": [
      "time-series"
    ]
  },
  {
    "id": "transformers",
    "title": "Transformers and Attention",
    "domain": "machine-learning",
    "difficulty": "advanced",
    "prerequisites": [
      "neural-networks",
      "linear-transformations",
      "fourier-analysis"
    ],
    "related": [
      "recurrent-neural-networks",
      "convolutional-neural-networks"
    ],
    "summary": "Transformers use self-attention to weigh input tokens dynamically. They have become the foundation of large language models and modern sequence modeling.",
    "keyPoints": [
      "Self-attention computes $\\operatorname{Attention}(Q,K,V) = \\operatorname{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)V$.",
      "Multi-head attention allows the model to attend to different representation subspaces.",
      "Positional encodings inject sequence order information."
    ],
    "formulas": [
      {
        "name": "Scaled dot-product attention",
        "tex": "\\operatorname{Attention}(Q,K,V) = \\operatorname{softmax}\\left(\\frac{QK^\\top}{\\sqrt{d_k}}\\right)V"
      },
      {
        "name": "Multi-head attention",
        "tex": "\\operatorname{MultiHead}(Q,K,V) = \\operatorname{Concat}(\\operatorname{head}_1, \\dots, \\operatorname{head}_h) W^O"
      },
      {
        "name": "Positional encoding",
        "tex": "PE_{(pos, 2i)} = \\sin(pos / 10000^{2i/d})"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import torch\nimport torch.nn.functional as F\n\nQ = torch.randn(8, 64)  # seq_len, d_k\nK = torch.randn(8, 64)\nV = torch.randn(8, 64)\n\nscores = Q @ K.T / (64 ** 0.5)\nattn_weights = F.softmax(scores, dim=-1)\nout = attn_weights @ V"
      }
    ],
    "references": [
      {
        "title": "Attention Is All You Need",
        "author": "Ashish Vaswani et al.",
        "source": "NeurIPS 2017",
        "url": "https://arxiv.org/abs/1706.03762"
      },
      {
        "title": "Deep Learning",
        "author": "Ian Goodfellow, Yoshua Bengio, and Aaron Courville",
        "source": "MIT Press",
        "url": "https://www.deeplearningbook.org/"
      }
    ],
    "tags": [
      "transformers",
      "attention",
      "llm"
    ],
    "applications": []
  },
  {
    "id": "time-series",
    "title": "Time Series Analysis",
    "domain": "quantitative-finance",
    "difficulty": "intermediate",
    "prerequisites": [
      "stochastic-processes",
      "statistical-inference"
    ],
    "related": [
      "brownian-motion",
      "recurrent-neural-networks",
      "linear-regression"
    ],
    "summary": "Time series analysis models data indexed in time. It is central to forecasting, econometrics, and quantitative finance.",
    "keyPoints": [
      "Stationarity, autocorrelation, and seasonality are key concepts.",
      "ARMA and ARIMA models capture linear temporal dependencies.",
      "GARCH models time-varying volatility."
    ],
    "formulas": [
      {
        "name": "AR(1)",
        "tex": "X_t = c + \\phi X_{t-1} + \\varepsilon_t"
      },
      {
        "name": "MA(1)",
        "tex": "X_t = \\mu + \\varepsilon_t + \\theta \\varepsilon_{t-1}"
      },
      {
        "name": "GARCH(1,1)",
        "tex": "\\sigma_t^2 = \\omega + \\alpha X_{t-1}^2 + \\beta \\sigma_{t-1}^2"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from statsmodels.tsa.arima.model import ARIMA\n\nmodel = ARIMA(series, order=(1, 0, 1))\nres = model.fit()\nprint(res.summary())"
      }
    ],
    "references": [
      {
        "title": "Time Series Analysis",
        "author": "James D. Hamilton",
        "source": "Princeton University Press",
        "url": "https://press.princeton.edu/books/hardcover/9780691042893/time-series-analysis"
      },
      {
        "title": "Analysis of Financial Time Series",
        "author": "Ruey S. Tsay",
        "source": "Wiley",
        "url": "https://www.wiley.com/en-us/Analysis+of+Financial+Time+Series%2C+3rd+Edition-p-9780470414354"
      }
    ],
    "tags": [
      "forecasting",
      "arima",
      "volatility"
    ],
    "applications": []
  },
  {
    "id": "brownian-motion",
    "title": "Brownian Motion and Itô Calculus",
    "domain": "quantitative-finance",
    "difficulty": "advanced",
    "prerequisites": [
      "stochastic-processes",
      "multivariable-calculus",
      "distributions"
    ],
    "related": [
      "black-scholes",
      "partial-differential-equations",
      "time-series"
    ],
    "summary": "Brownian motion and stochastic calculus provide the mathematical framework for modeling random continuous processes. Itô calculus is essential for derivative pricing and quantitative finance.",
    "keyPoints": [
      "Standard Brownian motion has independent increments and continuous paths.",
      "Itô's lemma extends the chain rule to stochastic processes.",
      "Stochastic integrals are defined as limits of simple processes."
    ],
    "formulas": [
      {
        "name": "Itô's lemma",
        "tex": "df(t, X_t) = \\frac{\\partial f}{\\partial t} dt + \\frac{\\partial f}{\\partial x} dX_t + \\frac{1}{2}\\frac{\\partial^2 f}{\\partial x^2} (dX_t)^2"
      },
      {
        "name": "Geometric Brownian motion",
        "tex": "dS_t = \\mu S_t \\, dt + \\sigma S_t \\, dW_t"
      },
      {
        "name": "Itô isometry",
        "tex": "\\mathbb{E}\\left[\\left(\\int_0^T X_t \\, dW_t\\right)^2\\right] = \\mathbb{E}\\left[\\int_0^T X_t^2 \\, dt\\right]"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\n\nT = 1.0\nN = 1000\ndt = T / N\ndW = np.random.randn(N) * np.sqrt(dt)\nW = np.cumsum(dW)\n\n# Simulate geometric Brownian motion\nS = 100 * np.exp(np.cumsum((0.05 - 0.5*0.2**2)*dt + 0.2*dW))\nprint(S[-1])"
      }
    ],
    "references": [
      {
        "title": "Stochastic Calculus for Finance I & II",
        "author": "Steven E. Shreve",
        "source": "Springer",
        "url": "https://link.springer.com/book/10.1007/978-0-387-22527-2"
      },
      {
        "title": "Brownian Motion and Stochastic Calculus",
        "author": "Ioannis Karatzas and Steven E. Shreve",
        "source": "Springer",
        "url": "https://www.springer.com/gp/book/9780387976558"
      }
    ],
    "tags": [
      "stochastic-calculus",
      "ito",
      "brownian-motion"
    ],
    "applications": [
      "black-scholes"
    ]
  },
  {
    "id": "black-scholes",
    "title": "Black-Scholes Model",
    "domain": "quantitative-finance",
    "difficulty": "advanced",
    "prerequisites": [
      "brownian-motion",
      "partial-differential-equations",
      "distributions"
    ],
    "related": [
      "portfolio-optimization",
      "time-series",
      "stochastic-processes"
    ],
    "summary": "The Black-Scholes model prices European options under geometric Brownian motion. It derives a PDE whose solution gives the famous Black-Scholes formula.",
    "keyPoints": [
      "Assumptions include constant volatility, no arbitrage, and risk-free hedging.",
      "The Black-Scholes PDE is a backward parabolic equation.",
      "The Greeks measure sensitivity to parameters."
    ],
    "formulas": [
      {
        "name": "Black-Scholes PDE",
        "tex": "\\frac{\\partial V}{\\partial t} + \\frac{1}{2}\\sigma^2 S^2 \\frac{\\partial^2 V}{\\partial S^2} + rS\\frac{\\partial V}{\\partial S} - rV = 0"
      },
      {
        "name": "Call option price",
        "tex": "C = S_0 N(d_1) - K e^{-rT} N(d_2)"
      },
      {
        "name": "d1, d2",
        "tex": "d_{1,2} = \\frac{\\log(S_0/K) + (r \\pm \\sigma^2/2)T}{\\sigma\\sqrt{T}}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy.stats import norm\n\ndef black_scholes_call(S, K, T, r, sigma):\n    d1 = (np.log(S/K) + (r + 0.5*sigma**2)*T) / (sigma*np.sqrt(T))\n    d2 = d1 - sigma*np.sqrt(T)\n    return S*norm.cdf(d1) - K*np.exp(-r*T)*norm.cdf(d2)\n\nprint(black_scholes_call(100, 100, 1, 0.05, 0.2))"
      }
    ],
    "references": [
      {
        "title": "Stochastic Calculus for Finance II",
        "author": "Steven E. Shreve",
        "source": "Springer",
        "url": "https://link.springer.com/book/10.1007/978-0-387-40101-0"
      },
      {
        "title": "The Pricing of Options and Corporate Liabilities",
        "author": "Fischer Black and Myron Scholes",
        "source": "Journal of Political Economy, 1973",
        "url": "https://www.journals.uchicago.edu/doi/10.1086/260062"
      }
    ],
    "tags": [
      "option-pricing",
      "pde",
      "arbitrage"
    ],
    "applications": []
  },
  {
    "id": "portfolio-optimization",
    "title": "Portfolio Optimization",
    "domain": "quantitative-finance",
    "difficulty": "advanced",
    "prerequisites": [
      "constrained-optimization",
      "expectation-variance",
      "matrix-decompositions"
    ],
    "related": [
      "black-scholes",
      "time-series",
      "linear-regression"
    ],
    "summary": "Portfolio optimization allocates capital across assets to maximize return for a given risk level. Markowitz mean-variance optimization is the canonical framework.",
    "keyPoints": [
      "Mean-variance optimization trades expected return against variance.",
      "The efficient frontier is the set of optimal portfolios.",
      "Constraints (no short selling, sector limits) lead to quadratic programming."
    ],
    "formulas": [
      {
        "name": "Mean-variance objective",
        "tex": "\\min_w \\frac{1}{2} w^\\top \\Sigma w - \\lambda w^\\top \\mu"
      },
      {
        "name": "Budget constraint",
        "tex": "\\sum_i w_i = 1"
      },
      {
        "name": "Sharpe ratio",
        "tex": "\\frac{\\mathbb{E}[R_p] - R_f}{\\sigma_p}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import numpy as np\nfrom scipy.optimize import minimize\n\nmu = np.array([0.08, 0.12, 0.10])\nSigma = np.array([[0.04, 0.02, 0.01],\n                  [0.02, 0.09, 0.03],\n                  [0.01, 0.03, 0.05]])\n\ndef objective(w):\n    return 0.5 * w @ Sigma @ w - 0.5 * mu @ w\n\nres = minimize(objective, [0.33, 0.33, 0.34],\n               constraints={'type': 'eq', 'fun': lambda w: np.sum(w) - 1})\nprint(res.x)"
      }
    ],
    "references": [
      {
        "title": "Portfolio Selection",
        "author": "Harry Markowitz",
        "source": "The Journal of Finance, 1952",
        "url": "https://onlinelibrary.wiley.com/doi/10.1111/j.1540-6261.1952.tb01525.x"
      },
      {
        "title": "Convex Optimization",
        "author": "Stephen Boyd and Lieven Vandenberghe",
        "source": "Cambridge University Press",
        "url": "https://web.stanford.edu/~boyd/cvxbook/"
      }
    ],
    "tags": [
      "finance",
      "quadratic-programming",
      "risk"
    ],
    "applications": []
  },
  {
    "id": "algorithm-complexity",
    "title": "Algorithm Complexity and Analysis",
    "domain": "computing",
    "difficulty": "intermediate",
    "prerequisites": [
      "sequences-series"
    ],
    "related": [
      "numerical-linear-algebra",
      "parallel-computing",
      "gradient-descent"
    ],
    "summary": "Algorithm complexity characterizes the resources (time, space) required by an algorithm as a function of input size. Big-O notation enables comparison of scalability.",
    "keyPoints": [
      "Big-O describes asymptotic upper bounds on growth rates.",
      "Time and space complexity are typically functions of input size $n$.",
      "Lower bounds and NP-hardness reveal fundamental limits."
    ],
    "formulas": [
      {
        "name": "Big-O definition",
        "tex": "f(n) = O(g(n)) \\iff \\exists c, n_0 : \\forall n \\ge n_0, \\; |f(n)| \\le c|g(n)|"
      },
      {
        "name": "Master theorem",
        "tex": "T(n) = aT(n/b) + f(n)"
      },
      {
        "name": "Matrix multiplication complexity",
        "tex": "O(n^\\omega) \\text{ where } \\omega < 2.373"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "import time\n\ndef measure(n):\n    start = time.time()\n    [i**2 for i in range(n)]\n    return time.time() - start\n\nfor n in [10**4, 10**5, 10**6]:\n    print(n, measure(n))"
      }
    ],
    "references": [
      {
        "title": "Introduction to Algorithms",
        "author": "Thomas H. Cormen, Charles E. Leiserson, Ronald L. Rivest, and Clifford Stein",
        "source": "MIT Press",
        "url": "https://mitpress.mit.edu/books/introduction-to-algorithms-fourth-edition"
      },
      {
        "title": "The Design and Analysis of Algorithms",
        "author": "Dexter C. Kozen",
        "source": "Springer",
        "url": "https://www.springer.com/gp/book/9780387976875"
      }
    ],
    "tags": [
      "big-o",
      "complexity",
      "algorithms"
    ],
    "applications": [
      "numerical-linear-algebra"
    ]
  },
  {
    "id": "parallel-computing",
    "title": "Parallel and Distributed Computing",
    "domain": "computing",
    "difficulty": "advanced",
    "prerequisites": [
      "algorithm-complexity",
      "linear-systems"
    ],
    "related": [
      "numerical-linear-algebra"
    ],
    "summary": "Parallel and distributed computing harness multiple processors or machines to solve large problems faster. It is essential for training large models and scientific simulations.",
    "keyPoints": [
      "Amdahl's law limits speedup due to sequential fractions.",
      "Data parallelism splits examples across workers; model parallelism splits parameters.",
      "Communication cost often dominates in distributed systems."
    ],
    "formulas": [
      {
        "name": "Amdahl's law",
        "tex": "S(n) = \\frac{1}{(1-p) + \\frac{p}{n}}"
      },
      {
        "name": "Speedup",
        "tex": "S = \\frac{T_1}{T_n}"
      },
      {
        "name": "Efficiency",
        "tex": "E = \\frac{S}{n}"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from multiprocessing import Pool\n\ndef square(x):\n    return x**2\n\nwith Pool(4) as p:\n    results = p.map(square, range(1000))\nprint(sum(results))"
      }
    ],
    "references": [
      {
        "title": "Introduction to Parallel Computing",
        "author": "Ananth Grama, Anshul Gupta, George Karypis, and Vipin Kumar",
        "source": "Addison-Wesley",
        "url": "https://www.cs.cmu.edu/~ Kumar/intro-parallel-computing-book.html"
      },
      {
        "title": "Algorithms for Modern Hardware",
        "author": "Sergey Slotin",
        "source": "Algorithmica",
        "url": "https://en.algorithmica.org/hpc/"
      }
    ],
    "tags": [
      "parallelism",
      "distributed-systems",
      "hpc"
    ],
    "applications": [
      "numerical-linear-algebra",
      "neural-networks"
    ]
  },
  {
    "id": "numerical-linear-algebra",
    "title": "Numerical Linear Algebra for HPC",
    "domain": "computing",
    "difficulty": "advanced",
    "prerequisites": [
      "matrix-decompositions",
      "parallel-computing",
      "algorithm-complexity"
    ],
    "related": [
      "partial-differential-equations"
    ],
    "summary": "Numerical linear algebra provides the computational kernels for scientific computing, optimization, and machine learning. Efficiency, stability, and parallelism are critical at scale.",
    "keyPoints": [
      "BLAS and LAPACK provide standardized high-performance kernels.",
      "Iterative methods (CG, GMRES) are essential for large sparse systems.",
      "Matrix-free and low-rank approximations reduce memory and time complexity."
    ],
    "formulas": [
      {
        "name": "Conjugate gradient",
        "tex": "\\text{For } A \\succ 0, \\text{ solve } Ax = b \\text{ in at most } n \\text{ steps.}"
      },
      {
        "name": "Krylov subspace",
        "tex": "\\mathcal{K}_k(A, b) = \\operatorname{span}\\{b, Ab, A^2b, \\dots, A^{k-1}b\\}"
      },
      {
        "name": "Conditioning",
        "tex": "\\kappa(A) = \\sigma_{\\max}(A)/\\sigma_{\\min}(A)"
      }
    ],
    "code": [
      {
        "language": "python",
        "snippet": "from scipy.sparse import diags\nfrom scipy.sparse.linalg import cg\n\nn = 1000\nA = diags([-1, 2, -1], [-1, 0, 1], shape=(n, n))\nb = np.ones(n)\nx, info = cg(A, b)\nprint(info)"
      }
    ],
    "references": [
      {
        "title": "Numerical Linear Algebra",
        "author": "Lloyd N. Trefethen and David Bau III",
        "source": "SIAM",
        "url": "https://www.siam.org/publications/books/textbooks/numerical-linear-algebra"
      },
      {
        "title": "Matrix Computations",
        "author": "Gene H. Golub and Charles F. Van Loan",
        "source": "Johns Hopkins University Press",
        "url": "https://www.press.jhu.edu/books/title/9781421407944/matrix-computations"
      }
    ],
    "tags": [
      "hpc",
      "blas",
      "lapack",
      "iterative-methods"
    ],
    "applications": [
      "partial-differential-equations"
    ]
  }
];

module.exports = { topics };
