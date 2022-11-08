import styled from "styled-components";
import Link from "next/link";
import { MdOutlineContentCopy } from "react-icons/md";
import { AiOutlinePieChart } from "react-icons/ai";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";
export default function SurveyCard({ title, url, date, id, onDelete }) {
  const router = useRouter();
  return (
    <StyledSurveyCard>
      <h2>{title}</h2>
      <time>{date}</time>
      <DisplayLink>
        <Link href={url} passHref><a target="_blank">{url}</a></Link>
        <button
          onClick={() => {
            navigator.clipboard.writeText(url);
          }}
        >
          <MdOutlineContentCopy />
        </button>
      </DisplayLink>
      <ButtonContainer>
        <PrimaryButton
          bg="#9BD77C"
          color="#101828"
          onClick={() => router.push(`/evaluation/${id}`)}
        >
          <AiOutlinePieChart />
          Evaluation
        </PrimaryButton>
        <PrimaryButton
          bg="#5EB6FF"
          color="#101828"
          onClick={() => router.push(`/edit/${id}`)}
        >
          <FiEdit />
          Edit
        </PrimaryButton>
        <PrimaryButton bg="#E5586A" color="#eee" onClick={onDelete}>
          <RiDeleteBin6Line />
          Delete
        </PrimaryButton>
      </ButtonContainer>
    </StyledSurveyCard>
  );
}
const ButtonContainer = styled.section``;

const DisplayLink = styled.section`
  word-break: break-word;
  border: 1px solid #aaa;
  border-radius: 0.2em;
  background-color: #dedede;
  padding: 0.3em;
  display: flex;
  justify-content: space-between;
  color: #555;
  & button {
    border: none;
    &:hover {
      cursor: pointer;
      background-color: #fff;
    }
  }
`;

const StyledSurveyCard = styled.li`
  all: unset;
  border: 1px solid black;
  border-radius: 0.4em;
  padding: 0.5em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  & h2 {
    margin-bottom: 0;
  }
`;
const StyledAnchor = styled.a`
  all: unset;
  background-color: #ddd;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 0.3em;
  cursor: pointer;
  margin-right: 0.8em;
`;
const StyledButton = styled.button`
  all: unset;
  background-color: #ddd;
  border: 1px solid black;
  border-radius: 0.2em;
  padding: 0.3em;
  cursor: pointer;
  margin-right: 0.8em;
`;
