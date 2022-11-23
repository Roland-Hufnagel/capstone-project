import styled from "styled-components";
import Link from "next/link";
import { MdOutlineContentCopy, MdCloudDone } from "react-icons/md";
import { FaCheckCircle } from "react-icons/fa";
import { AiOutlinePieChart } from "react-icons/ai";
import { PrimaryButton } from "./Buttons/PrimaryButton";
import { RiDeleteBin6Line } from "react-icons/ri";
import { FiEdit } from "react-icons/fi";
import { useRouter } from "next/router";
import { useState } from "react";
import Modal from "./Modal";

export default function SurveyCard({ title, description, url, date, id, onDelete }) {
  const router = useRouter();
  const [copied, setCopied] = useState(false);

  const [deleteModal, setDeleteModal] = useState(false);
  function onDeleteNot() {
    setDeleteModal(false);
  }
  function handleCopyClick() {
    navigator.clipboard.writeText(url);
    setCopied(true);
    const timeId = setTimeout(reset, 2000);
  }
  function reset() {
    setCopied(false);
  }
  return (
    <>
      {deleteModal && (
        <Modal
          text1={`${title}`}
          text2="Do you really want to delete this survey?"
          onYes={onDelete}
          onNo={onDeleteNot}
        />
      )}
      <StyledSurveyCard>
        <h2>{title}</h2>
        <Description>{description}</Description>
        <time>{date}</time>
        <DisplayLink>
          <Link href={url} passHref>
            <a>{url}</a>
          </Link>
          <button onClick={handleCopyClick}>
            {!copied && <MdOutlineContentCopy />}
            {copied && <FaCheckCircle style={{ color: "green" }} />}
          </button>
        </DisplayLink>
        <section>
          <PrimaryButton onClick={() => router.push(`/evaluation/${id}`)}>
            <AiOutlinePieChart />
            Evaluation
          </PrimaryButton>
          <PrimaryButton bg="myBlue" onClick={() => router.push(`/edit/${id}`)}>
            <FiEdit />
            Edit
          </PrimaryButton>
          <PrimaryButton
            bg="myRed"
            color="white"
            onClick={() => {
              setDeleteModal(true);
            }}
          >
            <RiDeleteBin6Line />
            Delete
          </PrimaryButton>
        </section>
      </StyledSurveyCard>
    </>
  );
}
const Description = styled.p`
margin: 0.3em 0;
`;

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
  border-radius: 0.4em;
  padding: 0.8em;
  display: flex;
  flex-direction: column;
  gap: 10px;
  background-color: #fff;
  box-shadow: 0px 12px 16px -4px rgba(16, 24, 40, 0.2),
    0px 4px 6px -2px rgba(16, 24, 40, 0.03);

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
