import { useAuthClient } from "@/hooks/useAuthClient";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Alert,
  AlertIcon,
  Link,
} from "@chakra-ui/react";
import {
  Dispatch,
  FC,
  FormEventHandler,
  SetStateAction,
  useState,
} from "react";
import { FormMode } from "..";
import { z } from "zod";
import { loginSchema } from "./form.schemas";
import { errorAlert } from "@/helpers/alerts";

type LoginFormProps = {
  changeMode: Dispatch<SetStateAction<FormMode>>;
};

export const LoginForm: FC<LoginFormProps> = ({ changeMode }) => {
  const { loginMutation } = useAuthClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    try {
      const formData = { email, password };
      loginSchema.parse(formData);
      setError(null);

      await loginMutation.mutateAsync(formData, {
        onSuccess: (data) => {
          localStorage.setItem("accessToken", data.user.token);
          window.location.href = "/"
        },
        onError: (error) => {
          console.error("Error al iniciar sesión:", error);
          errorAlert(`error al registrar`);
          throw new Error(error.message);
        },
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        setError(error.errors[0].message);
      } else {
        console.error("Error al iniciar sesión:", error);
      }
    }
  };

  return (
    <Flex
      w="70%"
      mt="8em"
      direction="column"
      alignItems="center"
      justifyContent="center"
    >
      <Text fontSize="2rem" fontWeight="bold">
        Bienvenido, Haciendola!
      </Text>
      {error && (
        <Alert status="error" mb={4} borderRadius="md">
          <AlertIcon />
          {error}
        </Alert>
      )}
      <form style={{ textAlign: "center" }} onSubmit={handleSubmit}>
        <FormControl id="email" mt={4}>
          <FormLabel>Email</FormLabel>
          <Input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            borderRadius="md"
            variant="filled"
            _hover={{ borderColor: "blue.500" }}
          />
          <FormHelperText>Nunca compartiremos tu email.</FormHelperText>
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            borderRadius="md"
            variant="filled"
            _hover={{ borderColor: "blue.500" }}
          />
        </FormControl>
        <Button type="submit" mt={6} colorScheme="blue" borderRadius="md">
          Iniciar sesión
        </Button>
      </form>
      <Flex w="100%" justifyContent="center">
        <Text mt={2}>
          ¿No tienes una cuenta?{" "}
          <Link
            onClick={() => changeMode(FormMode.REGISTER)}
            color="blue"
            cursor="pointer"
          >
            Crear cuenta
          </Link>
        </Text>
      </Flex>
    </Flex>
  );
};
