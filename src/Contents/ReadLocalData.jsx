import reviewData from '../data.json';

function ReadLocalData() {
  const arrayReviewData = reviewData.contents.map((item, index) => {
    return (
      <div key={index}>
        <li>
          {item.name}: {item.review}
        </li>
        {item.recommendation} / {item.way} / #{item.hashtag[0]} #
        {item.hashtag[1]} #{item.hashtag[2]}
        <br />
        <br />
      </div>
    );
  });
  return (
    <div>
      <h1>한 줄 리뷰</h1>
      <div>{arrayReviewData}</div>
    </div>
  );
}

export default ReadLocalData;
