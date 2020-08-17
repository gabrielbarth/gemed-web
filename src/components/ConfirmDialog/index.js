import React, { useState } from 'react';

import { DialogContainer } from './styles';

function ConfirmDialog({onConfirm, onCancel, number, isInternal}) {

  const internalCommunicationTitle = 'Tem certeza que deseja criar esta Comunicação Interna?';
  const externalCommunicationTitle = 'Tem certeza que deseja criar esta Comunicação Interna?';
  const yourNumberText = 'Seu número é:';

  return(
    <DialogContainer>
      <div>
        <h2>{number === 0
              ? isInternal
                  ? internalCommunicationTitle
                  : externalCommunicationTitle
              : yourNumberText
            }
        </h2>

        {number === 0
          ? <div>
              <button type='button' onClick={onConfirm}>CRIAR</button>
              <button type='button' onClick={onCancel}>CANCELAR</button>
            </div>
          : (
            <>
              <h1>{number}</h1>
              <button type='button' onClick={onCancel}>Ok</button>
            </>
            )
        }
      </div>
    </DialogContainer>
  );
}

export default ConfirmDialog;