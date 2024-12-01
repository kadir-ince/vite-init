import { Card, Form, Input, Button } from "antd";

interface LoginFormValues {
  email: string;
  password: string;
}

const LoginComponent = () => {
  const onFinish = (values: LoginFormValues) => {
    console.log("Success:", values);
  };

  return (
    <Card title="Giriş Formu">
      <Form<LoginFormValues>
        name="login"
        initialValues={{ email: "", password: "" }}
        onFinish={onFinish}
        layout="vertical"
      >
        <Form.Item
          label="Email"
          name="email"
          rules={[
            { required: true, message: "Lütfen email adresinizi girin!" },
            { type: "email", message: "Geçerli bir email adresi girin!" },
          ]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          label="Şifre"
          name="password"
          rules={[
            { required: true, message: "Lütfen şifrenizi girin!" },
            { min: 6, message: "Şifre en az 6 karakter olmalıdır!" },
          ]}
        >
          <Input.Password />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Giriş Yap
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default LoginComponent;
