import styled from 'styled-components';
import editImg from './edit-alt.svg';
import removeImg from './delete-alt.svg';

const Item = styled.li`
  position: relative;
  max-width: 100%;
  width: 100%;
  margin-bottom: 10px;
  padding: 20px;
  padding-right: 60px;
  border: 1px solid #000;
  border-radius: 6px; 
  list-style-type: none;
  p:first-child {
    font-size: 18px;
    font-weight: 500;
  }
  .edit {
    transition: .2s;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 20px;
    &:hover {
      transition: .2s;
      opacity: .6;
    }
  }
  .remove {
    transition: .2s;
    cursor: pointer;
    position: absolute;
    right: 10px;
    top: 50px;
    &:hover {
      transition: .2s;
      opacity: .6;
    }
  }
`;

const GoodsItem = (props) => {

  return (
    <Item key={props.id}>
      <p>Название товара: {props.name}</p>
      <p>Цена: {props.price + props.currency}</p>
      <div className="edit" onClick={props.editGoodsItem}>
        <img src={editImg} alt="" />
      </div>
      <div className="remove" onClick={props.removeGoodsItem}>
        <img src={removeImg} alt="" />
      </div>
    </Item>
  );
}

export default GoodsItem;