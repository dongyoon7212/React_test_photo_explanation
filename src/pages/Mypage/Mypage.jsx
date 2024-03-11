/** @jsxImportSource @emotion/react */
import { useEffect, useRef, useState } from "react";
import WideButton from "../../components/WideButton/WideButton";
import { useInput } from "../../hooks/useInput";
import * as S from "./style";
import defaultProfile from "../../assets/images/profile/default.jpeg";

/**
 *
 * 1. 이미지 클릭시 이미지 변경가능해야함.
 * 2. 수정하기 버튼 클릭시 localStorage에 key: user value: JSON데이터
 *  {
 *      nickname: "테스트계정",
 *      namd: "김준일",
 *      birthday: "1994-09-07",
 *      imgUrl: ""
 *  }
 *  저장되어야하고 페이지 로드시 불러와야함.
 * 3. RootHeader의 프로필 이미지도 변경되어야함.
 */
function Mypage(props) {
    const [nicknameValue, handleNicknameOnChange, setNicknameValue] =
        useInput();
    const [nameValue, handleNameOnChange, setNameValue] = useInput();
    const [birthdayValue, handleBirthdayOnChange, setBirthdayValue] =
        useInput();
    const [profileUrl, setProfileUrl] = useState(defaultProfile);
    const fileRef = useRef();

    useEffect(() => {
        const localStorageUser = localStorage.getItem("user");
        if (!!localStorageUser) {
            //!! 값이 있을때
            const user = JSON.parse(localStorageUser);
            setNicknameValue(() => user.nickname);
            setNameValue(() => user.name);
            setBirthdayValue(() => user.birthday);
            setProfileUrl(() => user.imgUrl);
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }

        const fileReader = new FileReader();

        fileReader.onload = (e) => {
            setProfileUrl(e.target.result);
        };

        fileReader.readAsDataURL(file);
    };

    const handleSubmitClick = () => {
        const user = {
            nickname: nicknameValue,
            name: nameValue,
            birthday: birthdayValue,
            imgUrl: profileUrl,
        };

        localStorage.setItem("user", JSON.stringify(user));
        alert("회원 정보를 수정하였습니다.");
    };

    return (
        <div css={S.layout}>
            <div css={S.imageBox} onClick={() => fileRef.current.click()}>
                <input
                    type="file"
                    name=""
                    id=""
                    ref={fileRef}
                    onChange={handleFileChange}
                    style={{ display: "none" }}
                />
                <img src={profileUrl} alt="" />
            </div>

            <input
                css={S.inputBox}
                type="text"
                placeholder="닉네임"
                value={nicknameValue}
                onChange={handleNicknameOnChange}
            />
            <input
                css={S.inputBox}
                type="text"
                placeholder="이름"
                value={nameValue}
                onChange={handleNameOnChange}
            />
            <input
                css={S.inputBox}
                type="text"
                placeholder="생년월일"
                value={birthdayValue}
                onChange={handleBirthdayOnChange}
            />
            <WideButton text={"완료"} onClick={handleSubmitClick} />
        </div>
    );
}

export default Mypage;
