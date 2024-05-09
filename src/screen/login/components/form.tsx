"use client";
import { useAuthClient } from "@/hooks/useAuthClient";
import {
  Flex,
  Text,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  Button,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";

export const LoginForm = () => {
  const { loginMutation } = useAuthClient();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await loginMutation.mutateAsync({ email, password });
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
    }
  };

  return (
    <Flex direction="column" alignItems="center" justifyContent="center">
      <Text fontSize="xl" fontWeight="bold">
        Bienvenido, Haciendola!
      </Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="email" mt={4}>
          <FormLabel>Email</FormLabel>
          <Input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Correo electrónico" />
          <FormHelperText>Well never share your email.</FormHelperText>
        </FormControl>
        <FormControl id="password" mt={4}>
          <FormLabel>Password</FormLabel>
          <Input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Contraseña" />
        </FormControl>
        <Button type="submit" mt={6} colorScheme="blue">
          Iniciar sesión
        </Button>
      </form>
      <Text mt={4}>
        ¿No tienes una cuenta? <Link color="blue">Crear cuenta</Link>
      </Text>
    </Flex>
  );
};
