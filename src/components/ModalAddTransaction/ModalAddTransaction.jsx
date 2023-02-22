import { useState } from 'react';
import {
  CheckboxLabel,
  InputLabel,
  Modal,
  ModalButtonCancel,
  ModalButtonAdd,
  ModalButtonWrap,
  ModalWrap,
  Overlay,
  InputLabelText,
  ModalTitle,
  SelectLabel,
  ModalButtonClose,
  Input,
  LabelText,
  LabelTextExpense,
  Form,
  Span,
  Icon,
  ModalInputWrap,
  InputData,
} from './ModalAddTransaction.styled';
import { useDispatch, useSelector } from 'react-redux';
import { closeModalAddTransaction } from 'redux/global/globalSlice';
import { addTransaction } from 'redux/transaction/transactionOperations';
import { selectCategories } from 'redux/categories/categoriesSelectors';
import { useEffect } from 'react';
import Datetime from 'react-datetime';
import 'react-datetime/css/react-datetime.css';
import moment from 'moment';
import { IoCloseOutline } from 'react-icons/io5';
import { IconContext } from 'react-icons';
import { fetchCategories } from 'redux/categories/categoriesOperations';
import { Formik, ErrorMessage } from 'formik';
import { object, string, number, date } from 'yup';
import Icons from 'images/icons.svg';

const validationSchema = object().shape({
  transactionDate: date().required('Data is a required field'),
  categoryId: string(),
  amount: number().required('Amount is a required field').positive(),
  comment: string(),
});

export const ModalAddTransaction = () => {
  const dispatch = useDispatch();
  const categories = useSelector(selectCategories);
  const [transactionDate, setTransactionDate] = useState(new Date(Date.now()));
  const [checked, setChecked] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  const handleClick = e => {
    e.preventDefault();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    dispatch(fetchCategories());
  }, [dispatch]);

  // 1 Закриваємо по Esc
  useEffect(() => {
    const onEscClick = evt => {
      if (evt.code === 'Escape') dispatch(closeModalAddTransaction());
    };

    window.addEventListener('keydown', onEscClick);
    return () => {
      window.removeEventListener('keydown', onEscClick);
    };
  }, [dispatch]);
  //______________________

  // 2 Закриваємо по Overlay
  const onOverlayClose = evt => {
    if (evt.currentTarget === evt.target) dispatch(closeModalAddTransaction());
  };
  //______________________

  const onChange = e => {
    setChecked(e.target.checked);
  };

  const date = new Date(
    transactionDate.toString().replace(/(\d+).(\d+).(\d+)/, '$3/$2/$1')
  );
  console.log(date)

  const categoriesFilter = categories.filter(cat => cat.name !== 'Income');
  const renderError = message => <Span>{message}</Span>;

  return (
    <Overlay onClick={onOverlayClose}>
      <Modal>

        <ModalButtonClose type="button" onClick={()=> {dispatch(closeModalAddTransaction());}}>

          <IconContext.Provider value={{ size: '3em' }}>
            <IoCloseOutline />
          </IconContext.Provider>
        </ModalButtonClose>
        <Formik
          initialValues={{
            transactionDate,
            categoryId: '',
            amount: '',
            comment: '',
            type: '',
          }}
          onSubmit={values => {
            const currentCategorie = categories.find(
              cat => cat.name === values.categoryId
            );

            dispatch(
              addTransaction({
                transactionDate,
                type: !checked ? 'INCOME' : 'EXPENSE',
                categoryId: !checked
                  ? categories[10].id
                  : (currentCategorie && currentCategorie.id) ||
                    categories[0].id,
                comment: values.comment,
                amount: !checked
                  ? Number(values.amount)
                  : -Number(values.amount),
              })
            );
          }}
          validationSchema={validationSchema}
        >
          {({
            errors,
            touched,
            values,
            handleSubmit,
            handleBlur,
            handleChange,
            isSubmitting,
            setFieldValue,
          }) => (
            <Form   onSubmit={handleSubmit}>
              <ModalTitle> Add transaction</ModalTitle>

              <Input
                onChange={onChange}
                checked={checked}
                type="checkbox"
                name="checkbox"
                id="topic-1"
                onBlur={handleBlur}
              />

              <ModalWrap>
                <LabelText checked={checked}>Income</LabelText>
                <CheckboxLabel
                  htmlFor="topic-1"
                  checked={checked}
                ></CheckboxLabel>
                <LabelTextExpense checked={checked}>Expense</LabelTextExpense>
              </ModalWrap>

              {checked && (
                <SelectLabel
                  name="categoryId"
                  onChange={handleChange}
                  value={values.categoryId}
                  onBlur={handleBlur}
                >
                  {categories &&
                    categoriesFilter.map(({ id, name }) => {
                      return (
                        <option key={id} id={id}>
                          {name}
                        </option>
                      );
                    })}
                </SelectLabel>
              )}

              <ModalInputWrap>
                <div>
                  <InputLabel
                    value={values.amount}
                    onChange={handleChange}
                    onBlur={handleBlur}
                    type="text"
                    name="amount"
                    placeholder="0.00"

                    // pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
                    // title="Amount must be digits and can contain spaces, dashes, parentheses"
                  />
                  <ErrorMessage name="amount" render={renderError} />
                </div>

                <Datetime
                  open={isOpen}
                  timeFormat={false}
                  name={transactionDate}
                  value={transactionDate}
                  id="date"
                  type="date"
                  input={true}
                  selected={transactionDate}
                  maxDate={new Date()}
                  onBlur={handleBlur}
                  // dateFormat = "dd-MM-yyyy"
                  onChange={newValue => {
                    setTransactionDate(moment(newValue).toISOString());
                  }}
                  renderInput={params => <InputData {...params} />}
                />
                <Icon onClick={handleClick}>
                  <use href={`${Icons}#icon-calendar`} />
                </Icon>
              </ModalInputWrap>
              <InputLabelText
                value={values.comment}
                onChange={handleChange}
                onBlur={handleBlur}
                name="comment"
                placeholder="Comment"
              />

              <ModalButtonWrap>
                <ModalButtonAdd type="submit" disabled={isSubmitting}>
                  Add
                </ModalButtonAdd>
                <ModalButtonCancel type="button" onClick={()=>{dispatch(closeModalAddTransaction())}}>
                  Cancel
                </ModalButtonCancel>
              </ModalButtonWrap>
            </Form>
          )}
        </Formik>
      </Modal>
    </Overlay>
  );
};
