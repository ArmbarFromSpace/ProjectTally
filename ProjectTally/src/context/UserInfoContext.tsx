import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";

type UserInfo = {
  accountUserName: string;
  setAccountUserName: Dispatch<SetStateAction<string>>;
  accountEmail: string;
  setEmail: Dispatch<SetStateAction<string>>;
  accountPhone: string;
  setPhone: Dispatch<SetStateAction<string>>;
  registerdAccountUserName: string;
  setRegisterdAccountUserName: Dispatch<SetStateAction<string>>;
  registerdAccountPassword: string;
  setRegisterdAccountPassword: Dispatch<SetStateAction<string>>;
  registerdAccountPhone: string;
  setRegisterdAccountPhone: Dispatch<SetStateAction<string>>;
  registerdAccountFirstName: string;
  setRegisterdAccountFirstName: Dispatch<SetStateAction<string>>;
  registerdAccountLastName: string;
  setRegisterdAccountLastName: Dispatch<SetStateAction<string>>;
  registerdAccountEmail: string;
  setRegisterdAccountEmail: Dispatch<SetStateAction<string>>;
  dateOfBirth: Date | null;
  setDateOfBirth: Dispatch<SetStateAction<Date | null>>;
};

const UserContext = createContext<UserInfo>({
  accountUserName: "",
  setAccountUserName: () => {},
  accountEmail: "",
  setEmail: () => {},
  accountPhone: "",
  setPhone: () => {},
  registerdAccountUserName: "",
  setRegisterdAccountUserName: () => {},
  registerdAccountPassword: "",
  setRegisterdAccountPassword: () => {},
  registerdAccountPhone: "",
  setRegisterdAccountPhone: () => {},
  registerdAccountFirstName: "",
  setRegisterdAccountFirstName: () => {},
  registerdAccountLastName: "",
  setRegisterdAccountLastName: () => {},
  registerdAccountEmail: "",
  setRegisterdAccountEmail: () => {},
  dateOfBirth: null,
  setDateOfBirth: () => {},
});

interface UserProps {
  children: React.ReactNode;
}

export function UserInformation({ children }: UserProps) {
  const [accountUserName, setAccountUserName] = useState("");
  const [accountEmail, setEmail] = useState("");
  const [accountPhone, setPhone] = useState("");
  const [registerdAccountFirstName, setRegisterdAccountFirstName] =
    useState("");
  const [registerdAccountLastName, setRegisterdAccountLastName] = useState("");
  const [registerdAccountUserName, setRegisterdAccountUserName] = useState("");
  const [registerdAccountPassword, setRegisterdAccountPassword] = useState("");
  const [registerdAccountPhone, setRegisterdAccountPhone] = useState("");
  const [registerdAccountEmail, setRegisterdAccountEmail] = useState("");
  const [dateOfBirth, setDateOfBirth] = useState<Date | null>(null);

  return (
    <UserContext.Provider
      value={{
        accountUserName,
        setAccountUserName,
        accountEmail,
        setEmail,
        accountPhone,
        setPhone,
        registerdAccountFirstName,
        setRegisterdAccountFirstName,
        registerdAccountLastName,
        setRegisterdAccountLastName,
        registerdAccountUserName,
        setRegisterdAccountUserName,
        registerdAccountPassword,
        setRegisterdAccountPassword,
        registerdAccountPhone,
        setRegisterdAccountPhone,
        registerdAccountEmail,
        setRegisterdAccountEmail,
        dateOfBirth,
        setDateOfBirth,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}

export function useUser() {
  return useContext(UserContext);
}
