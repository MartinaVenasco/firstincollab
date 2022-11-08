import MainCard from '../MainCard';
import './index.css';

const TopRatedList = ({ cardData, nCards }) => {

  return (
    <div className="TopRatedList">
      {
        [...Array(nCards)].map((i, ii) => <MainCard cardData={ cardData } cardStyle={{ width: '200px', height: '70px', fontSize: '16px' }} key={ii}/>)
      }
    </div>
  )
}

export default TopRatedList;