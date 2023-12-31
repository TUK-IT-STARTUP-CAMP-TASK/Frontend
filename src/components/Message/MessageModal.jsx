/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable prettier/prettier */
import RetryAuth from '../Authentication/RetryAuth';
import AddMessage from './AddMessage';

export default function MessageModal({
  handleOpenMessage,
  addMessage,
  message,
  closeModal,
}) {
  const role = localStorage.getItem('role');
  const techeerRole = import.meta.env.VITE_TECHEER_ROLE;
  const joonRole = import.meta.env.VITE_JOON_ROLE;

  // 모달 바깥쪽 클릭 시 닫히게 하는 함수
  const handleClickMessageOutside = (event) => {
    if (event.target.id === 'messageOutside') {
      closeModal();
    }
  };

  if (message) {
    return (
      <div
        id="messageOutside"
        onClick={handleClickMessageOutside}
        className="fixed top-0 left-0 z-20 flex items-center justify-center w-screen h-screen text-center bg-black bg-opacity-20">
        <div className="flex flex-col justify-center bg-cover h-80 w-80 bg-message-image">
          <div className="relative p-10 mt-5 ">
            <div className="flex flex-col items-center justify-center overflow-auto font-omyu_pretty h-52 w-60">
              <p className="flex text-lg message-content">{message.content}</p>
              <p className="font-omyu_pretty absolute bottom-[45px] right-[40px] text-right">
                - {message.nickname} -
              </p>
            </div>
            <button
              type="button"
              onClick={() => closeModal()}
              className="font-omyu_pretty bottom-0 mt-1 h-8 rounded bg-white px-4 py-1 text-sm text-[#e26a68] shadow-md hover:bg-[#e7e7e7]">
              닫기
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed top-0 left-0 z-10 flex items-center justify-center w-full h-full">
      <div className="w-84 mt-[32rem] flex h-80 flex-col justify-center bg-message-image bg-cover">
        {role === techeerRole && (
          <RetryAuth handleOpenMessage={handleOpenMessage} color="#e26a68" />
        )}
        {role === joonRole && (
          <AddMessage
            handleOpenMessage={handleOpenMessage}
            addMessage={addMessage}
          />
        )}
      </div>
    </div>
  );
}
