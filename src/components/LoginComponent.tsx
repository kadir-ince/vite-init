const LoginComponent = () => {
  return (
    <div>
      <h2>Giriş Formu</h2>
      <form>
        <div>
          <label>Email:</label>
          <input type="email" />
        </div>
        <div>
          <label>Şifre:</label>
          <input type="password" />
        </div>
        <button type="submit">Giriş Yap</button>
      </form>
    </div>
  );
};

export default LoginComponent;
