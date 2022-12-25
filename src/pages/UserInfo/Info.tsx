import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { uploadAvatar } from '../../api/auth';
import Input from '../../component/Common/Input';
import Message from '../../component/Common/Message';
import useUserSlice from '../../hooks/useUserSlice';

const Info = () => {
  const {
    register,
    setValue,
    handleSubmit,
    formState: { errors }
  } = useForm({
    defaultValues: {
      name: '',
      username: '',
      password: '',
      email: '',
      birth: '',
      avatar: '',
      phone: '',
      gender: ''
    }
  });

  const { user } = useUserSlice();

  useEffect(() => {
    Object.entries(user).forEach(([k, v]: any) => {
      setValue(k, v);
    });
  }, [user]);

  const registerGender = register('gender', {
    required: 'Trường này không được để trống'
  });

  const onSubmit = async (data: any) => {
    const imageBuffer = new FormData();
    imageBuffer.append('avatar', data.avatar[0]);
    try {
      await uploadAvatar(imageBuffer, data?.username);
      // await updateUser(data)
    } catch (error) {}
  };

  return (
    <div>
      <form action="" className="py-10 " onSubmit={handleSubmit((data: any) => onSubmit(data))}>
        <Input
          register={{
            ...register('name', {
              required: 'Trường này không được để trống',
              minLength: {
                value: 6,
                message: 'Trường này tối thiểu 6 ký tự'
              }
            })
          }}
          label="name"
          errors={errors?.name?.message}
        />

        <div className="mb-10">
          <label className="capitalize peer-focus:font-medium  text-sm text-gray-500 dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] ">
            {'gender'}
          </label>
          <div className="flex items-center gap-4">
            <input value={'FEMALE'} type={'radio'} {...registerGender} placeholder=" " />
            <label className="">{'Nữ'}</label>
          </div>
          <div className="flex items-center gap-4">
            <input value={'MALE'} type={'radio'} {...registerGender} placeholder=" " />
            <label className="">{'Nam'}</label>
          </div>
          <Message message={errors?.gender?.message} />
        </div>

        <Input
          type="date"
          register={{
            ...register('birth', {
              required: 'Trường này không được để trống'
            })
          }}
          label="Ngày Sinh"
          errors={errors?.birth?.message}
        />
        <Input
          type="email"
          register={{
            ...register('email', {
              required: 'Trường này không được để trống',
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: 'Định dạng email không chính xác'
              }
            })
          }}
          label="Email"
          errors={errors?.email?.message}
        />
        <Input
          register={{
            ...register('phone', {
              required: 'Trường này không được để trống',
              pattern: {
                value: /(84|0[3|5|7|8|9])+([0-9]{8})\b/g,
                message: 'Hãy nhập đúng định dạng số điện thoại'
              }
            })
          }}
          label="phone"
          errors={errors?.phone?.message}
        />
        <Input
          type="file"
          register={{
            ...register('avatar', {
              required: 'Trường này không được để trống'
            })
          }}
          label="avatar"
          errors={errors?.avatar?.message}
        />
        <button className="bg-clrOrange text-white px-6 py-4 rounded-lg focus:bg-clrOrange/80 transition">
          Cập Nhật
        </button>
      </form>
    </div>
  );
};

export default Info;
