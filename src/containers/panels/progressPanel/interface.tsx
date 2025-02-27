import BookModel from "../../../model/Book";
import HtmlBookModel from "../../../model/HtmlBook";

export interface ProgressPanelProps {
  currentBook: BookModel;
  isReading: boolean;
  currentChapter: string;
  t: (title: string) => string;
  percentage: number;
  htmlBook: HtmlBookModel;
  renderFunc: (id: string) => void;
}
export interface ProgressPanelState {
  displayPercentage: number;
  currentChapter: string;
  currentChapterIndex: number;
  currentPage: number;
  totalPage: number;
}
