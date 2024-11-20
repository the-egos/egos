'use client';
import { SubmitHandler, useForm } from 'react-hook-form';

interface FormType {
  email: string;
  password: string;
}
const Signup = () => {
  const {
    register,
    setError,
    handleSubmit,
    formState: { errors },
  } = useForm<FormType>({
    defaultValues: { email: '', password: '' },
  });

  const join = async (params: {
    email: string;
    password: string;
  }): Promise<any> => {
    const { email, password } = params;

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BASE_URL}/api/auth/join`,
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(params),
      },
    );

    return res.json();
  };

  const onSubmit: SubmitHandler<FormType> = data => {
    console.log('data', data);
    join(data)
      .then(res => console.log('res', res))
      .catch((err: any) => {
        console.warn(err);
      });
  };
  console.log('err', errors);

  return (
    <section className="flex flex-col">
      <h1>회원가입</h1>
      <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
        <div>
          <p>이메일</p>
          <input {...register('email')} type="email" />
          {/* <Input {...register('email')} type="email" /> */}
        </div>
        <div>
          <p>비밀번호</p>
          <input {...register('password')} type="password" />
        </div>

        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </section>
  );
};

export default Signup;
