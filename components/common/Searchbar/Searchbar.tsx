import { FC, memo, useEffect } from 'react';

interface Props {
  className?: string;
  placeHolder?: string;
  id?: string;
}

const Searchbar: FC<Props> = ({
  className = 'form-control',
  placeHolder = 'Search for photos',
  id = 'search',
}) => {
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      const query = e.currentTarget.value;
      console.log(query);
    }
  };

  return (
    <>
      <label className='hidden' htmlFor={id}>
        Search
      </label>
      <input
        id={id}
        className={className}
        placeholder={placeHolder}
        onKeyUp={handleKeyUp}
      />
    </>
  );
};

export default memo(Searchbar);
