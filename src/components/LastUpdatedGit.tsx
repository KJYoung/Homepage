import { useEffect, useState } from "react";

interface LastCommitProps {
    repoName: string;
    filePath: string;
  }
  
export const LastUpdatedGit = ({ repoName, filePath } : LastCommitProps) => {
  const [lastUpdated, setLastUpdated] = useState<string>("Loading...");
  // const repoName = 'KJYoung/Homepage';
  // const filePath = 'README.md';
  useEffect(() => {
    fetch(`https://api.github.com/repos/${repoName}/commits?path=${filePath}`)
    .then(response => response.json())
    .then(data => {
      const lastCommitDate = new Date(data[0].commit.committer.date);
      setLastUpdated(lastCommitDate.toLocaleDateString());
    })
    .catch(error => {
      setLastUpdated('Failed to load recent date;');
    })
  }, [repoName, filePath]);

  return <>
    <div>Last updated at: {lastUpdated}</div>
  </>
}