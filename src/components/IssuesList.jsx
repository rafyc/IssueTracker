import { useQuery } from "react-query";
import { IssueItem } from "./IssueItem";

export default function IssuesList() {
  const issueQuerry = useQuery(["issues"], () =>
    fetch("/api/issues").then((res) => res.json())
  );
  console.log(issueQuerry.data);
  return (
    <div>
      <h2>Issues List</h2>
      {issueQuerry.isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className="issues-list">
          {issueQuerry.data.map((issue) => (
            <IssueItem
              key={issue.id}
              title={issue.title}
              number={issue.number}
              assignee={issue.assignee}
              commentBy={issue.commentBy}
              createdBy={issue.createdBy}
              createdDate={issue.createdDate}
              labels={issue.labels}
              status={issue.status}
              commentCount={issue.comments.length}
            />
          ))}
        </ul>
      )}
    </div>
  );
}
