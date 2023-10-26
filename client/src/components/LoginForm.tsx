import React, { FormEvent, ChangeEvent, FunctionComponent } from 'react';

interface LoginFormProps {
  onSubmitUsername: (username: string, password: string) => void;
}

const LoginForm: FunctionComponent<LoginFormProps> = ({ onSubmitUsername }) => {
  const [username, setUsername] = React.useState<string>('');
  const [password, setPassword] = React.useState<string>('');

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    onSubmitUsername(username, password);
  }

  function handleChange(event: ChangeEvent<HTMLInputElement>, setter: React.Dispatch<React.SetStateAction<string>>): void {
    setter(event.target.value.toLowerCase());
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label htmlFor="username">Username:</label>
        <input
          id="username"
          type="text"
          onChange={(e) => handleChange(e, setUsername)}
          value={username}
        />
      </div>
      <div>
        <label htmlFor="password">Password:</label>
        <input
          id="password"
          type="password"
          onChange={(e) => handleChange(e, setPassword)}
          value={password}
        />
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default LoginForm;
