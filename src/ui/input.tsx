import { Component } from "react";
import Error from "./icon-error.svg";
interface FieldState {
  value: string;
  error: boolean;
  errorMessage: string;
}

interface FormState {
  firstName: FieldState;
  lastName: FieldState;
  email: FieldState;
  password: FieldState;
}

export class Form extends Component<{}, FormState> {
  constructor(props: {}) {
    super(props);

    this.state = {
      firstName: {
        value: "",
        error: false,
        errorMessage: "First Name cannot be empty",
      },
      lastName: {
        value: "",
        error: false,
        errorMessage: "Last Name cannot be empty",
      },
      email: {
        value: "",
        error: false,
        errorMessage: "Looks like this is not an email",
      },
      password: {
        value: "",
        error: false,
        errorMessage: "Password cannot be empty",
      },
    };
  }

  handleInputChange = (fieldName: keyof FormState, value: string) => {
    this.setState((prevState) => ({
      ...prevState,
      [fieldName]: {
        ...prevState[fieldName],
        value,
        error: value.trim() === "",
      },
    }));
  };

  render() {
    const { firstName, lastName, email, password } = this.state;

    return (
      <form action="" className="flex flex-col gap-4">
        <label className="relative">
          <input
            type="text"
            className={`w-full px-[1.21rem] py-[0.94rem] border ${
              firstName.error ? "border-red-500" : "border-[#DEDEDE]"
            } rounded-[0.3125rem] text-sm focus:border focus:border-third focus:outline-none placeholder:text-[#3D3B48BF] placeholder:font-semibold placeholder:text-sm`}
            placeholder="First Name"
            value={firstName.value}
            onChange={(e) =>
              this.handleInputChange("firstName", e.target.value)
            }
          />
          {firstName.error && (
            <div className="text-primary italic text-[0.6875rem] mt-[0.38px] text-right">
              {firstName.errorMessage}
            </div>
          )}
          <img
            src={Error}
            alt="Ícone"
            className={`${
              firstName.error ? "block" : "hidden"
            } absolute right-3 top-3.5 pointer-events-none`}
          />
        </label>

        <label className="relative">
          <input
            type="text"
            className={`w-full px-[1.21rem] py-[0.94rem] border ${
              lastName.error ? "border-red-500" : "border-[#DEDEDE]"
            } rounded-[0.3125rem] text-sm focus:border focus:border-third focus:outline-none placeholder:text-[#3D3B48BF] placeholder:font-semibold placeholder:text-sm`}
            placeholder="Last Name"
            value={lastName.value}
            onChange={(e) => this.handleInputChange("lastName", e.target.value)}
          />
          {lastName.error && (
            <div className="text-primary italic text-[0.6875rem] mt-[0.38px] text-right">
              {lastName.errorMessage}
            </div>
          )}
          <img
            src={Error}
            alt="Ícone"
            className={`${
              lastName.error ? "block" : "hidden"
            } absolute right-3 top-3.5 pointer-events-none`}
          />
        </label>

        <label className="relative">
          <input
            type="text"
            className={`w-full px-[1.21rem] py-[0.94rem] border ${
              email.error ? "border-red-500" : "border-[#DEDEDE]"
            } rounded-[0.3125rem] text-sm focus:border focus:border-third focus:outline-none placeholder:text-[#3D3B48BF] placeholder:font-semibold placeholder:text-sm`}
            placeholder="Email Address"
            value={email.value}
            onChange={(e) => this.handleInputChange("email", e.target.value)}
          />
          {email.error && (
            <div className="text-primary italic text-[0.6875rem] mt-[0.38px] text-right">
              {email.errorMessage}
            </div>
          )}
          <img
            src={Error}
            alt="Ícone"
            className={`${
              email.error ? "block" : "hidden"
            } absolute right-3 top-3.5 pointer-events-none`}
          />
        </label>

        <label className="relative">
          <input
            type="password"
            className={`w-full px-[1.21rem] py-[0.94rem] border ${
              password.error ? "border-red-500" : "border-[#DEDEDE]"
            } rounded-[0.3125rem] text-sm focus:border focus:border-third focus:outline-none placeholder:text-[#3D3B48BF] placeholder:font-semibold placeholder:text-sm`}
            placeholder="Password"
            value={password.value}
            onChange={(e) => this.handleInputChange("password", e.target.value)}
          />
          {password.error && (
            <div className="text-primary italic text-[0.6875rem] mt-[0.38px] text-right">
              {password.errorMessage}
            </div>
          )}
          <img
            src={Error}
            alt="Ícone"
            className={`${
              password.error ? "block" : "hidden"
            } absolute right-3 top-3.5 pointer-events-none`}
          />
        </label>
      </form>
    );
  }
}
