import './Help.style.scss';
import ConsultingListItem from '../help/ConsultingListItem';
import logo from '../../assets/logo_original.png';
import _ from 'lodash';
import { useState } from 'react';
// import face from '../../assets/faces/face3.png';
// import ConsultingModalLoadingGuest from './ConsultingModalLoadingGuest';
// import BlackOut from '../../components/blackout/BlackOut';
import Swal from 'sweetalert2';
import { useSelector } from 'react-redux';

const ConsultingList = ({ consultingList }) => {
  // const [randomOne, setRandomOne] = useState();
  // useEffect(() => {
  //   setRandomOne(_.sample(consultingList));
  // }, []);
  const myNickname = useSelector((state) => state.member.nickName);

  const [isOpen, setIsOpen] = useState();

  const isOpenClick = () => {
    if (!myNickname) {
      Swal.fire(
        '로그인이 필요한 서비스 입니다.',
        '로그인 페이지로 이동합니다.',
        'warning',
      );
      return <>{/* 로그인 모달창 이동 */}</>;
    }
    setIsOpen(!isOpen);
  };

  const randomOne = _.sample(consultingList);
  return (
    <div className="consulting-div">
      <div className="consulting-list">
        {consultingList.length > 0 ? (
          <div className="consulting-list-child">
            {consultingList.map((item) => (
              <ConsultingListItem key={item.roomId} consultingItem={item} />
            ))}
          </div>
        ) : (
          <>
            <h1>
              지금은 아무것도 없덕...
              <img src={logo} alt="" className="logo" />
            </h1>
          </>
        )}
      </div>
    </div>
  );
};

export default ConsultingList;
