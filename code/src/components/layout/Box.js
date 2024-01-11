import React from 'react';

export const Box = ({title, classNames = [], children}) => {
  const useClasses = ['box', 'container'].concat(classNames).join(' ');

  return (
    <div className={useClasses}>
      { title &&
        <div className="row">
          <div className="col-12">
            <h2 className="box-title">{title}</h2>
          </div>
        </div>
      }
      <div className="row">
        <div className="col-12">
          {children}
        </div>
      </div>
      <style jsx="true">{`
        .box{
          margin-bottom: 15px;
        }
        .box h2.box-title{
          color: #547F5D;
          font-size: 1.8em;
          font-weight: 700;
          text-transform: uppercase;
          margin-top: 20px;
          margin-bottom: 10px;
        }
        .box h2.box-title:before{
          content: '//';
          margin-right: 5px;
        }
        .box p{
          font-size: 1.3em;
          line-height: 1.5em;
        }
      `}</style>
    </div>
  );
};