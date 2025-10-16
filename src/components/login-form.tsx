import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Field,
  FieldDescription,
  FieldError,
  FieldGroup,
  FieldLabel,
} from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import * as z from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { Controller, useForm } from "react-hook-form";
import { Link, useNavigate } from "react-router-dom";
import { api } from "@/api";
import { AxiosError } from "axios";
import { useState } from "react";

const formSchema = z.object({
  username: z.string(),
  password: z.string(),
});

export function LoginForm({
  className,
  ...props
}: React.ComponentProps<"div">) {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      username: "",
      password: "",
    },
  });

  async function onSubmit(data: z.infer<typeof formSchema>) {
    try {
      const { data: token } = await api.post("/login", data);
      console.log(token.token);
      localStorage.setItem("token", token.token);

      navigate("/users");
    } catch (error) {
      if (error instanceof AxiosError) {
        console.log(error.response?.data);
        setError(error.response?.data.error);
      } else {
        console.error("Неизвестная ошибка", error);
        setError("Неизвестная ошибка");
      }
    }
  }

  return (
    <div className={cn("flex flex-col gap-6", className)} {...props}>
      <Card>
        <CardHeader>
          <CardTitle>Войдите в ваш аккаунт</CardTitle>
          <CardDescription>{error && error}</CardDescription>
        </CardHeader>
        <CardContent>
          <form id="login-form" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <Controller
                name="username"
                control={form.control}
                render={({ field, fieldState }) => {
                  // console.log(field);
                  // console.log(fieldState);
                  return (
                    <Field data-invalid={fieldState.invalid}>
                      <FieldLabel htmlFor="username">
                        Имя пользователя
                      </FieldLabel>
                      <Input
                        {...field}
                        id="username"
                        type="text"
                        placeholder=""
                        required
                      />
                      {fieldState.invalid && (
                        <FieldError errors={[fieldState.error]} />
                      )}
                    </Field>
                  );
                }}
              />

              <Controller
                name="password"
                control={form.control}
                render={({ field, fieldState }) => (
                  <Field data-invalid={fieldState.invalid}>
                    <div className="flex items-center">
                      <FieldLabel htmlFor="password">Пароль</FieldLabel>
                    </div>
                    <Input {...field} id="password" type="password" required />
                    {fieldState.invalid && (
                      <FieldError errors={[fieldState.error]} />
                    )}
                  </Field>
                )}
              />
              <Field>
                <Button className="cursor-pointer" type="submit">
                  Войти
                </Button>
                <FieldDescription className="text-center">
                  Нет аккаунта? <Link to="/register">Зарегистрироваться</Link>
                </FieldDescription>
              </Field>
            </FieldGroup>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
