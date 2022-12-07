import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  HeadingLevel,
  BorderStyle,
} from "docx";
import saveAs from "file-saver";
import swal from "sweetalert";

const font = "Arial Rounded";
const black = "000000";

const myBorderStyle = {
  color: black,
  space: 1,
  style: BorderStyle.SINGLE,
  size: 6,
};

const sectionHeading = {
  heading: HeadingLevel.HEADING_3,
  border: { bottom: myBorderStyle },
};

const makeDoc = async (
  prepDoc: {
    title: string;
    answer: string;
  }[]
) => {
  try {
    const doc = new Document({
      sections: [
        {
          children: [
            new Paragraph({
              heading: HeadingLevel.TITLE,
              children: [
                new TextRun({
                  text: "Job Dialogue Feedback",
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              heading: HeadingLevel.HEADING_2,
              border: { bottom: { style: BorderStyle.SINGLE } },
              keepLines: true,
              children: [
                new TextRun({
                  text: `${prepDoc[0].title} ${
                    prepDoc[0].answer
                  } ${new Date().toLocaleDateString()}`,
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              ...sectionHeading,
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[1].title,
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[1].answer,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              ...sectionHeading,
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[2].title,
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              keepLines: true,

              children: [
                new TextRun({
                  text: prepDoc[2].answer,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              ...sectionHeading,
              keepLines: true,

              children: [
                new TextRun({
                  text: prepDoc[3].title,
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[3].answer,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              ...sectionHeading,
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[4].title,
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[4].answer,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              ...sectionHeading,
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[5].title,
                  color: black,
                  font: font,
                }),
              ],
            }),
            new Paragraph({
              keepLines: true,
              children: [
                new TextRun({
                  text: prepDoc[5].answer,
                  font: font,
                }),
              ],
            }),
          ],
        },
      ],
    });

    const name = prepDoc[0].answer.replace(" ", "_");

    const blob = await Packer.toBlob(doc);

    saveAs(blob, `job_dialogue_${name}.docx`);

    swal("Success", "", "success");
  } catch (error: any) {
    swal("Ooops!", error.message, "error");
  }
};

export default makeDoc;
