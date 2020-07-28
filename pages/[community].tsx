// @ts-nocheck
import { useRouter } from "next/router";
import { connect } from "react-redux";

function Community({ communityState }) {
  const router = useRouter();
  const { community } = router.query;
  console.log(communityState);
  return (
    <p>
      Community: {community} : {communityState}
    </p>
  );
}

const mapStateToProps = (state) => ({
  communityState: state.community,
});

const mapDispatchToProps = {};

export default connect(mapStateToProps, mapDispatchToProps)(Community);
