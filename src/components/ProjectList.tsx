import React from 'react';
import Repos from '@/models/repos';
import RepoBox from './RepoBox';

type Props = {
  repo: Repos[]
}

const ProjectList = ({ repo }: Props) => {
  return ( 
    <div>
      <ul>
        {repo.map((repo) => (
          <RepoBox
            key={repo.id}
            image={repo.image}
            title={repo.title}
            description={repo.description}
            project={repo.project}
            language={repo.language}
            link={repo.link} 
            deploy={repo.deploy}          />
        ))}
      </ul>
    </div>
  );
}

export default ProjectList;