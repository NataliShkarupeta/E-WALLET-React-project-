import { GrFormEdit } from 'react-icons/gr';
import { useMedia } from 'react-use';
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react';
import { selectFinanceData } from 'redux/transaction/transactionSelectors';
import { openModalUpDateTransaction } from 'redux/global/globalSlice';
import { useEffect } from 'react';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { openModalConfirmation } from 'redux/global/globalSlice';
import {
  Container,
  Table,
  TrHead,
  ThDay,
  ThType,
  ThCategore,
  ThComment,
  ThCurrency,
  ThEdit,
  ThDel,
  TrData,
  TdDate,
  TdType,
  TdCadegory,
  TdComment,
  TdAmount,
  TdEdit,
  TdDel,
  EditButton,
  DelButton,
  MobList,
  MobItem,
  MobHeader,
  MobComment,
  MobSum,
} from './TransactionsList.styled';
import { normalizedDate } from './normalizedDate';
import PropTypes from 'prop-types';

export const TransactionsList = ({ data, info }) => {
  const isTablet = useMedia('(min-width: 768px)');
 
  const categories = useSelector(selectCategories);
  const financeData = useSelector(selectFinanceData);
  const [trans, setTrans] = useState('');
  const dispatch = useDispatch();

  const saveTransaction = id => {
    setTrans(financeData.find(trans => trans.id === id));
    dispatch(openModalUpDateTransaction());
    
  };

  const saveTransactionForDelete = id => {
    setTrans(financeData.find(trans => trans.id === id));
    dispatch(openModalConfirmation());
  };

  const takeNameCategories = id => {
    let nameCategories = categories.find(categorie => categorie.id === id);
    if (nameCategories) return nameCategories.name;
  };

  useEffect(() => {
    trans && info(trans);
    setTrans('')
    console.log(trans)
  }, [dispatch, info, trans]);

  return (
    <>
      {!isTablet ? (
        <>
          {data.map(
            ({ id, transactionDate, type, categoryId, comment, amount }) => (
              <MobList key={id} type={type.toLowerCase()}>
                <MobItem>
                  <MobHeader>Date</MobHeader>
                  {normalizedDate(transactionDate)}
                </MobItem>
                <MobItem>
                  <MobHeader>Type</MobHeader>
                  {type.toLowerCase() === 'income' ? '+' : '-'}
                </MobItem>
                <MobItem>
                  <MobHeader>Category</MobHeader>
                  {takeNameCategories(categoryId)}
                </MobItem>
                <MobItem>
                  <MobHeader>Comment</MobHeader>
                  <MobComment>{comment}</MobComment>
                </MobItem>
                <MobItem style={{ fontWeight: '700' }}>
                  <MobHeader>Sum</MobHeader>
                  <MobSum type={type.toLowerCase()}>{amount.toFixed(2)}</MobSum>
                </MobItem>
                <MobItem>
                  <DelButton
                    onClick={() => saveTransactionForDelete(id)}
                  >
                    Delete
                  </DelButton>
                  <EditButton onClick={() => saveTransaction(id)}>
                    <GrFormEdit
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        width: '30px',
                        height: '30px',
                      }}
                    />
                    Edit
                  </EditButton>
                </MobItem>
              </MobList>
            )
          )}
        </>
      ) : (
        //desctop
        <Container>
          <Table>
            <thead>
              <TrHead>
                <ThDay>Date</ThDay>
                <ThType>Type</ThType>
                <ThCategore>Cotegory</ThCategore>
                <ThComment>Comment</ThComment>
                <ThCurrency>Currency</ThCurrency>
                <ThEdit></ThEdit>
                <ThDel></ThDel>
              </TrHead>
            </thead>
            <tbody>
              {data.map(
                ({
                  id,
                  transactionDate,
                  type,
                  categoryId,
                  comment,
                  amount,
                }) => (
                  <TrData key={id}>
                    <TdDate>{normalizedDate(transactionDate)}</TdDate>
                    <TdType>
                      {type.toLowerCase() === 'income' ? '+' : '-'}
                    </TdType>
                    <TdCadegory>{takeNameCategories(categoryId)}</TdCadegory>
                    <TdComment>{comment}</TdComment>
                    <TdAmount type={type}>{amount.toFixed(2)}</TdAmount>
                    <TdEdit>
                      <EditButton onClick={() => saveTransaction(id)}>
                        <GrFormEdit
                          style={{
                            display: 'flex',
                            alignItems: 'center',
                            width: '30px',
                            height: '30px',
                          }}
                        />
                      </EditButton>
                    </TdEdit>
                    <TdDel>
                      <DelButton
                        onClick={() => saveTransactionForDelete(id)}
                      >
                        Delete
                      </DelButton>
                    </TdDel>
                  </TrData>
                )
              )}
            </tbody>
          </Table>
        </Container>
      )}
    </>
  );
};


TransactionsList.propTypes = {
  data: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      transactionDate: PropTypes.number.isRequired,
      type: PropTypes.string.isRequired,
      categoryId: PropTypes.string.isRequired,
      comment: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
    }).isRequired
  ),
  info: PropTypes.func,
};