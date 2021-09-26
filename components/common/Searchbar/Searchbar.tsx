import React, { FC, memo, useEffect, useState } from 'react';

import Input from '@components/ui/Input';
import { useRouter } from 'next/router';

interface Props {
  className?: string;
  placeHolder?: string;
  id?: string;
}

const Searchbar: FC<Props> = ({
  className = 'form-control',
  placeHolder = 'Search for photos: coffee,office...',
  id = 'search',
}) => {
  const [tag, setTag] = useState('');
  const router = useRouter();
  const handleKeyUp = (e: React.KeyboardEvent<HTMLInputElement>) => {
    e.preventDefault();
    if (e.key === 'Enter') {
      searchPhotosHandler();
    }
  };

  useEffect(() => {
    setTag('');
  }, [router.pathname]);

  function searchPhotosHandler() {
    if (tag) {
      const searchPath = `/search/${tag}`;
      router.replace(searchPath);
    }
  }

  return (
    <>
      <Input
        id={id}
        className={className}
        value={tag}
        placeholder={placeHolder}
        onKeyUp={handleKeyUp}
        onChange={setTag}
      />
    </>
  );
};

export default memo(Searchbar);
