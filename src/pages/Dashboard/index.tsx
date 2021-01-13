import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

// function Dashboard() {} é mais verboso pra falar o tipo
const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github</Title>

      <Form>
        <input placeholder="Digite o nome do repositório" />
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
