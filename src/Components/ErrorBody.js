import "../styles/ErrorBody.css";
import { IconButton, Input, Textarea, Link } from "@chakra-ui/react";
import { useState, React, useEffect } from "react";
import { IoExpand } from "react-icons/io5";
import Editor from "./Editor";
import FullViewComponent from "./FullViewComponent";
import ImageLinkContainer from "./ImageLinkContainer";
import ReferenceLinkContainer from "./ReferenceLinkContainer";
import LabelContainer from "./LabelContainer";

export default function ErrorBody({ errorFile }) {
  const [textareaheight, setTextareaheight] = useState(6);

  const [errorTitle, setErrorTitle] = useState();

  const [projectTitle, setProjectTitle] = useState("");

  const [problemDescription, setProblemDescription] = useState("");

  const [solutionText, setSolutionText] = useState("");

  const [beforeFixValue, setBeforeFixValue] = useState();

  const [beforeFixText, setBeforeFixText] = useState(errorFile.beforeFixText);
  const [afterFixText, setAfterFixText] = useState(errorFile.afterFixText);

  class ImageLinkElement {
    constructor(link, text) {
      this.link = link;
      this.text = text;
    }

    getLink() {
      return this.link;
    }

    getText() {
      return this.text;
    }
  }
  const [imageList, setImageList] = useState([
    new ImageLinkElement("www.google.com", "Google"),
    new ImageLinkElement("www.gmail.com", "Gmail"),
  ]);
  const [linkText, setLinkText] = useState("");
  const [linkName, setLinkName] = useState("");

  const [referenceLink, setReferenceLink] = useState();
  const [referenceLinkList, setReferenceLinkList] = useState([
    "https://discuss.elastic.co/t/error-elasticsearch-service-unable-to-retrieve-version-information-from-elasticsearch-nodes/306399",
  ]);

  const [labelName, setLabelName] = useState();
  const [labelList, setLabelList] = useState(["Redis"]);

  function handleChange(event) {
    const rows = event.target.rows;
    const height = event.target.scrollHeight - 28;
    const rowHeight = 24;
    const trows = Math.ceil(height / rowHeight) - 1;
    console.log("Height " + height + " Rows:" + rows + " Trows : " + trows);
    setTextareaheight(trows);
  }

  // Extra Padding is 56-24 = 28px - 14 above 14 below

  const [isFullViewModalOpen, setIsFullViewModalOpen] = useState(false);

  function openModal() {
    setIsFullViewModalOpen(true);
  }

  function closeModal() {
    console.log(errorFile.beforeFixText);
    console.log(errorFile.afterFixText);
    setIsFullViewModalOpen(false);
    errorFile.beforeFixText = beforeFixText;
    errorFile.afterFixText = afterFixText;
    console.log(errorFile.beforeFixText);
    console.log(errorFile.afterFixText);
  }

  return (
    <div className="main-container">
      <div className="fancy">
        <div className="error-title">
          <div className="error-title-text">Error title</div>
          <Input
            className="error-title-input"
            placeholder="Enter the Error File title"
            value={errorFile.errorTitle}
            onChange={(event) => {
              errorFile.errorTitle = event.target.value;
            }}
          ></Input>
        </div>
        <div className="project-title">
          <div className="project-title-text">Project Title</div>
          <Input
            className="project-title-input"
            placeholder="Enter the Project title"
            value={errorFile.projectTitle}
            onChange={(event) => {
              errorFile.projectTitle = event.target.value;
            }}
          ></Input>
        </div>
        <div className="problem-description">
          <div className="problem-description-text">Problem Description</div>
          <Textarea
            className="problem-description-textarea"
            wrap="soft"
            rows={5}
            placeholder="Problem Description"
            value={errorFile.problemText}
            onChange={(event) => {
              errorFile.problemText = event.target.value;
            }}
          ></Textarea>
        </div>
        <div className="solution-description">
          <div className="solution-description-text">Solution Text</div>
          <Textarea
            placeholder="Solution Text"
            className="solution-description-textarea"
            wrap="soft"
            rows={textareaheight}
            value={errorFile.solutionText}
            onChange={(event) => {
              handleChange(event);
              errorFile.solutionText = event.target.value;
            }}
          ></Textarea>
        </div>
        <div className="code-blocks">
          <div className="before-fix">
            <div className="before-fix-label">
              Before
              <IconButton
                icon={
                  <IoExpand
                    size={20}
                    onClick={() => {
                      openModal();
                      setBeforeFixValue(true);
                    }}
                  />
                }
              ></IconButton>
            </div>
            <div className="before-fix-textarea">
              <Editor
                readOnly={false}
                value={beforeFixText}
                toolBarVisibility={false}
                setValue={setBeforeFixText}
              ></Editor>
            </div>
          </div>
          <div className="after-fix">
            <div className="after-fix-label">
              After
              <IconButton
                icon={<IoExpand size={20} />}
                onClick={() => {
                  openModal();
                  setBeforeFixValue(false);
                }}
              ></IconButton>
            </div>
            <div className="after-fix-textarea">
              <Editor
                readOnly={false}
                value={afterFixText}
                toolBarVisibility={false}
                setValue={setAfterFixText}
              ></Editor>
            </div>
          </div>
        </div>
        <div className="imageLinkList">
          <div className="image-link-list-label">Image Link List</div>
          <div className="image-link-list-input-container">
            <Input
              className="image-link-list-link-input"
              placeholder="Enter the image link"
              value={linkText}
              onChange={(event) => {
                setLinkText(event.target.value);
              }}
            ></Input>
            <Input
              className="image-link-list-name-input"
              placeholder="Enter the link display text"
              value={linkName}
              onChange={(event) => {
                setLinkName(event.target.value);
              }}
            ></Input>
            <Link
              onClick={() => {
                imageList.push(new ImageLinkElement(linkText, linkName));
                setImageList(imageList);
                errorFile.imageList = imageList;
                setLinkText("");
                setLinkName("");
              }}
            >
              <button type="button" className="btn btn-primary">
                Save Link
              </button>
            </Link>
          </div>
          <ImageLinkContainer imageList={imageList} />
        </div>

        <div className="referenceLinkList">
          <div className="reference-link-list-label">References</div>
          <div className="reference-link-list-input-container">
            <Input
              className="reference-link-list-link-input"
              placeholder="Enter the reference link"
              value={referenceLink}
              onChange={(event) => {
                setReferenceLink(event.target.value);
              }}
            ></Input>
            <Link
              onClick={() => {
                referenceLinkList.push(referenceLink);
                setReferenceLinkList(referenceLinkList);
                errorFile.referenceList = referenceLinkList;
                setReferenceLink("");
              }}
            >
              <button type="button" className="btn btn-primary">
                Save Reference
              </button>
            </Link>
          </div>
          <ReferenceLinkContainer referenceLinkList={referenceLinkList} />
        </div>
        <div className="labels">
          <div className="labels-list-label">Labels</div>
          <div className="label-list-input-container">
            <Input
              className="label-list-link-input"
              placeholder="Enter the label name"
              value={labelName}
              onChange={(event) => {
                setLabelName(event.target.value);
              }}
            ></Input>
            <Link
              onClick={() => {
                labelList.push(labelName);
                setLabelList(labelList);
                errorFile.labelList = labelList;
                console.log(errorFile.labelList);
                setLabelName("");
              }}
            >
              <button type="button" className="btn btn-primary">
                Save Label
              </button>
            </Link>
          </div>
          <LabelContainer labelList={labelList} />
        </div>
        <FullViewComponent
          isOpen={isFullViewModalOpen}
          onClose={closeModal}
          closeModal={closeModal}
          value={beforeFixValue ? beforeFixText : afterFixText}
          setValue={beforeFixValue ? setBeforeFixText : setAfterFixText}
        />
      </div>
    </div>
  );
}
