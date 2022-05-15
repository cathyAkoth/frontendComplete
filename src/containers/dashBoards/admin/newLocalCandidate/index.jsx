import "./newCandidate.css";
import { PersonAdd } from "@material-ui/icons";
import PageHeader from "./PageHeader";
import CandidateForm from "./CandidateForm";
import { Paper, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  pageContent: {
    margin: theme.spacing(5),
    padding: theme.spacing(3),
  },
}));

export default function NewLocalCandidate() {
  return (
    <div className="new-candidate">
      <PageHeader
        title="New Candidate"
        subTitle="Basic registration of new Candidate"
        icon={<PersonAdd fontSize="large" />}
      />
      <Paper className="pageContent">
        <CandidateForm />
      </Paper>
    </div>
  );
}
