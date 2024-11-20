import cn from 'clsx';

interface PropsType {
  type: string;
  className?: string;
}
/**
 * 공용 input
 */
const Input = (props: PropsType) => {
  const { type, className = '' } = props;
  return (
    <input
      type={type}
      className={cn('border-borderPrimary border-[1px] rounded-lg', className)}
    />
  );
};

export default Input;
