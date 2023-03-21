import React from 'react';
import { useForm } from 'react-hook-form';

function App() {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <label htmlFor="name">Họ và tên:</label>
      <input type="text" id="name" {...register("name", { required: true })} />
      {errors.name && <span>This field is required</span>}

      <label htmlFor="address">Địa chỉ:</label>
      <input type="text" id="address" {...register("address", { required: true })} />
      {errors.address && <span>This field is required</span>}

      <label htmlFor="phone">Số điện thoại:</label>
      <input type="text" id="phone" {...register("phone", { required: true, pattern: /^[0-9\b]+$/i })} />
      {errors.phone && errors.phone.type === "required" && <span>This field is required</span>}
      {errors.phone && errors.phone.type === "pattern" && <span>Please enter a valid phone number</span>}

      <label htmlFor="email">Email:</label>
      <input type="email" id="email" {...register("email", { required: true, pattern: /^\S+@\S+$/i })} />
      {errors.email && errors.email.type === "required" && <span>This field is required</span>}
      {errors.email && errors.email.type === "pattern" && <span>Please enter a valid email address</span>}

      <label htmlFor="symptoms">Các triệu chứng trong vòng 14 ngày qua:</label>
      <input type="checkbox" id="fever" {...register("fever")} />
      <label htmlFor="fever">Sốt</label>
      <input type="checkbox" id="cough" {...register("cough")} />
      <label htmlFor="cough">Ho</label>
      <input type="checkbox" id="breathlessness" {...register("breathlessness")} />
      <label htmlFor="breathlessness">Khó thở</label>

      <input type="submit" />
    </form>
  );
}

export default App;