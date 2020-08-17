import React, { useState, useEffect, FormEvent, useContext } from 'react';
import { parseISO, format } from 'date-fns';
import { useHistory } from 'react-router-dom';

import { AuthContext } from '~/context/Auth';
import api from '~/services/api';

import PageHeader from '~/components/PageHeader';
import Input from '~/components/Input';
import ConfirmDialog from '~/components/ConfirmDialog';
import CommunicationItem, { Communication } from '~/components/Communication';

import {
  Container,
  InputContainer,
  ButtonPagination,
  DialogLoginContainer
} from './styles';
import Footer from '~/components/Footer';

const InternalCommunications: React.FC = () => {
  const history = useHistory();
  const { auth } = useContext(AuthContext);

  const [communications, setCommunications] = useState();
  const [author, setAuthor] = useState('');
  const [subject, setSubject] = useState('');

  const [newPage, setNewPage] = useState(1);
  const [displayDialog, setDisplayDialog] = useState(false);
  const [dialogNumber, setDialogNumber] = useState<Number>(0);

  const loadNextPage = () => {
    if (communications.length < 10) return;

    const nextPage = newPage + 1;
    loadCommunications(nextPage);
  };

  const loadPreviousPage = () => {
    if (newPage < 1) return;

    const nextPage = newPage - 1;
    loadCommunications(nextPage);
  };

  async function loadCommunications(page = 1) {
    setNewPage(page);

    try {
      const response = await api.get('internal-communications', {
        params : {
          page: newPage
        }
      });

      const { data } = response;
      const formatedData = data.map((communication: Communication) => {
        return {
          ...communication,
          number: communication.ic_number,
          date: format(parseISO(communication.date), 'dd/MM/yyyy'),
        };
      });
      setCommunications(formatedData);

    } catch (error) {

    }
  }

  useEffect(() => {
    loadCommunications();

  }, []);

  async function createCommunication() {

    try {
      const response = await api.post('internal-communications', {
        title: subject,
        author,
        to: '',
      });

      setCommunications([...communications, response.data]);
      loadCommunications();
      setDisplayDialog(false);
      showNumberDialog(response.data.ic_number);
      // setAuthor('');
      setSubject('');

    } catch (error) {
      console.log('Create communication Error: ', error);
    }

  }

  function handleCallCommunicationCreation(e: FormEvent){
    e.preventDefault();
    setDisplayDialog(true)
  }

  function showNumberDialog(number: Number) {
    setDialogNumber(number);
    setDisplayDialog(true);
  }


  async function handleConfirmCreation () {
      await createCommunication();
  }

  const handleCancelCreation = () => {
      setDisplayDialog(false);
      setDialogNumber(0);
      setAuthor('');
      setSubject('');
  }

  return (
    <Container>
      {displayDialog
        ? <ConfirmDialog
            isInternal={true}
            onConfirm={handleConfirmCreation}
            onCancel={handleCancelCreation}
            number={dialogNumber}
          />
        : null
      }
      <PageHeader
        title="Comunicações Internas (CI)"
        navigateTo="/external-communications"
      />
      {auth
      ? <>
            <InputContainer>
            <form onSubmit={handleCallCommunicationCreation}>
              <Input
                name="name"
                label="Nome do autor"
                value={author}
                onChange={e => setAuthor(e.target.value)}
              />

              <Input
                name="subject"
                label="Assunto"
                value={subject}
                onChange={e => setSubject(e.target.value)}
              />
              {/* <Input name="teste" label="Destino" /> */}
              <button type="submit"> Criar </button>
            </form>
          </InputContainer>

          {communications?.map((communication: Communication) => {
            return (
              <CommunicationItem
                key={communication.ic_number}
                communication={communication}
              />
            );
          })
          }

          <div>
            <ButtonPagination type="button" onClick={loadPreviousPage}>
              Anterior
            </ButtonPagination>
            <ButtonPagination type="button" onClick={loadNextPage}>
              Próximo
            </ButtonPagination>
          </div>
        </>
        : (
          <DialogLoginContainer>
            <div>
              <h2>Heey, Parece que você não realizou login!</h2>
              <button
                type="button"
                onClick={() => history.push('/')}
              >
                Realizar Login
              </button>
            </div>
          </DialogLoginContainer>
        )
      }
      <Footer />
    </Container>
  );
}

export default InternalCommunications;
