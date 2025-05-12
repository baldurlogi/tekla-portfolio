import React from 'react';
import { Helmet } from 'react-helmet';

const Meta = ({ title, description }) => {
  const baseTitle = 'TEKLA - Makeup Artist & Designer';
  const fullTitle = title ? `${title} | ${baseTitle}` : baseTitle;

  return (
    <Helmet>
        <title>{fullTitle}</title>
        <meta name="description" content={description} />
        <meta property="og:title" content={fullTitle} />
        <meta property="og:description" content={description} />
        <meta property="og:type" content="website" />
    </Helmet>
  )
}

export default Meta