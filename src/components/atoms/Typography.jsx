import React from 'react';

const TypoTitle = ({ content }) => {
  return <p className="typo-title">{content}</p>;
};
const TypoSubTitle = ({ content }) => {
  return <p className="typo-sub">{content}</p>;
};
const TypoMain = ({ text, coloredText }) => {
  return (
    <p className="typo-main">
      {text} <span> {coloredText}</span>{' '}
    </p>
  );
};
export { TypoTitle, TypoSubTitle, TypoMain };
