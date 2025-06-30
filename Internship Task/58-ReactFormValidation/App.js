//  React Form with Validation
const App = () => {
  const [form, setForm] = React.useState({
    name: '',
    email: '',
    password: ''
  });

  const [errors, setErrors] = React.useState({});
  const [submitted, setSubmitted] = React.useState(false);

  const validate = () => {
    const newErrors = {};
    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(form.email)) {
      newErrors.email = "Email is invalid";
    }
    if (!form.password.trim()) {
      newErrors.password = "Password is required";
    } else if (form.password.length < 6) {
      newErrors.password = "Password must be at least 6 characters";
    }
    return newErrors;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formErrors = validate();
    setErrors(formErrors);
    setSubmitted(Object.keys(formErrors).length === 0);
  };

  return (
    <div>
      <h1> React Form Validation</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />
        {errors.name && <div className="error">{errors.name}</div>}

        <input
          type="email"
          placeholder="Enter Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />
        {errors.email && <div className="error">{errors.email}</div>}

        <input
          type="password"
          placeholder="Enter Password"
          name="password"
          value={form.password}
          onChange={handleChange}
        />
        {errors.password && <div className="error">{errors.password}</div>}

        <button type="submit">Submit</button>
      </form>

      {submitted && <div className="success">🎉 Form submitted successfully!</div>}
    </div>
  );
};

//  Render to DOM
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
