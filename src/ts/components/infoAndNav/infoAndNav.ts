import { store } from '../../../store';
import infoAndNavTPL from '../../../templates/infoAndNav.html';
import { PropsInfoAndNav } from '../../interfaces/components/PropsInfoAndNav';
import { createHtmlElementFromTpl } from '../../lib';
import './infoAndNav.scss';

export const infoAndNav = (props: PropsInfoAndNav) => {
  const infoAndNavTpl = createHtmlElementFromTpl(infoAndNavTPL);
  const {
    countTitleText,
    storeField,
    storeFieldCurrentPage,
    storeFieldPages,
    btnPrevPageType,
    btnNextPageType,
  } = props;

  const countTitle = infoAndNavTpl.querySelector(`#countRecordsTitle`);
  const countRecords = infoAndNavTpl.querySelector(`#countRecords`);
  const currentPage = infoAndNavTpl.querySelector(`#currentPage`);
  const pages = infoAndNavTpl.querySelector('#pages');
  const btnPrevPage = infoAndNavTpl.querySelector('#btnPrevPage');
  const btnNextPage = infoAndNavTpl.querySelector('#btnNextPage');

  if (
    !(countTitle instanceof HTMLSpanElement) ||
    !(countRecords instanceof HTMLSpanElement) ||
    !(currentPage instanceof HTMLSpanElement) ||
    !(pages instanceof HTMLSpanElement)
  )
    throw new Error(`Can't find span for info`);

  if (!(btnPrevPage instanceof HTMLButtonElement) || !(btnNextPage instanceof HTMLButtonElement))
    throw new Error(`Can't find buttons for Nav`);

  btnPrevPage.dataset.btnType = btnPrevPageType;
  btnNextPage.dataset.btnType = btnNextPageType;

  countTitle.innerText = countTitleText;
  countRecords.innerText = store[storeField].toString();
  currentPage.innerText = store[storeFieldCurrentPage].toString();
  pages.innerText = store[storeFieldPages].toString();

  return infoAndNavTpl;
};

// export const infoAndNav = (props: PropsInfoAndNav) => {
//   const infoAndNavTpl = createHtmlElementFromTpl(infoAndNavTPL);

//   const countCars = infoAndNavTpl.querySelector('#countCars');
//   const currentPage = infoAndNavTpl.querySelector('#currentPage');
//   const pages = infoAndNavTpl.querySelector('#pages');

//   const btnGaragePrevPage = infoAndNavTpl.querySelector('#btnGaragePrevPage');
//   const btnGarageNextPage = infoAndNavTpl.querySelector('#btnGarageNextPage');

//   if (
//     !(countCars instanceof HTMLSpanElement) ||
//     !(currentPage instanceof HTMLSpanElement) ||
//     !(pages instanceof HTMLSpanElement)
//   )
//     throw new Error(`Can't find span for info`);

//   if (
//     !(btnGaragePrevPage instanceof HTMLButtonElement) ||
//     !(btnGarageNextPage instanceof HTMLButtonElement)
//   )
//     throw new Error(`Can't find buttons for Nav`);

//   countCars.innerText = store.countCars.toString();
//   currentPage.innerText = store.currentGaragePage.toString();
//   pages.innerText = store.pagesCountGarage.toString();

//   return infoAndNavTpl;
// };
