import React from 'react';
import Button from '../Button';

const BtnCancel = (props) => {
  const { onPress, text, styleBtn, styleTextBtn } = props;
  return (
    <Button
      onPress={onPress}
      text={text}
      styleBtn={styleBtn}
      styleTextBtn={styleTextBtn}
    />
  );
};

export default BtnCancel;
