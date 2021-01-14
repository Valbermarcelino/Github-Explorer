import React, { useState, FormEvent } from 'react';
import { FiChevronRight } from 'react-icons/fi';
import api from '../../services/api';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// Eu preciso colocar na minha tipagem só as informações q eu vou utilizar na minha interface
interface Repository {
  full_name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

// function Dashboard() {} é mais verboso pra falar o tipo
const Dashboard: React.FC = () => {
  const [newRepo, setNewRepo] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleAddRepository(
    event: FormEvent<HTMLFormElement>,
  ): Promise<void> {
    event.preventDefault();

    const response = await api.get<Repository>(`repos/${newRepo}`);

    const repository = response.data;

    setRepositories([...repositories, repository]);
    // console.log(response.data);
    // console.log(newRepo);
    // Adição de um novo repositório
    // Consumir API do Github
    // Salvar novo repositório no estado
  }

  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form onSubmit={handleAddRepository}>
        <input
          value={newRepo}
          onChange={e => setNewRepo(e.target.value)}
          placeholder="Digite o nome do repositório"
        />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://instagram.fubt1-1.fna.fbcdn.net/v/t51.2885-19/s150x150/75280196_747899542397651_4926991176923348992_n.jpg?_nc_ht=instagram.fubt1-1.fna.fbcdn.net&_nc_ohc=zThdMKZGv8IAX9xeurU&tp=1&oh=87ddd62a2db124106da9cb3409b490b1&oe=602859FA"
            alt="Valber"
          />
          <div>
            <strong>rocketseat/unform</strong>
            <p>Easy peasy highly scaleable React JS</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
