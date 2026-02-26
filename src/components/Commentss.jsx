import React,{useState , useEffect} from 'react';
import chat from "/src/assets/icons/chat.png";
import star from "/src/assets/icons/star.png";

const Commentss = () => {
     const [UserComments, setUserComments] = useState([]);
     const [saveComment, setSaveComment] = useState([]);

      function addComment(e) {
    e.preventDefault();
    if (!saveComment.userName?.trim() || !saveComment.userComment?.trim()) {
      return;
    }
    setUserComments((prev) => [
      ...prev,
      {
        userName: saveComment.userName,
        userComment: saveComment.userComment,
      },
    ]);
    setSaveComment({ userName: "", userComment: "" });
  }
    return (
       <section className="w-full">
              <div className="flex justify-start items-center my-8 gap-2">
                <img className="w-7 h-7" src={chat} />
                <h3 className="text-2xl mb-2">بخش نظرات</h3>
              </div>
              <div className="flex justify-between flex-col-reverse lg:flex-row items-start overflow-scroll no-scrollbar gap-5 lg:gap-0 w-full">
                <div className="lg:w-[65%] w-full max-h-[40rem] no-scrollbar border border-neutral-200 bg-white rounded p-3">
                  {UserComments.length === 0 ? (
                    <p>هنوز نظری ثبت نشده است</p>
                  ) : (
                    UserComments?.map((item) => (
                      <div
                        key={item.id}
                        className="p-2 rounded-lg bg-neutral-100 mb-6"
                      >
                        <div className="w-full flex justify-between items-center">
                          <span className="block font-semibold text-xs lg:text-[1rem]">
                            {" "}
                            کاربر : {item.userName}
                          </span>
                          <div className="flex justify-end items-center gap-1">
                            <span className="ml-8 text-neutral-600">1404-09-13</span>
                            <span className="ml-1.5">4.5</span>
                            <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                            <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                            <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                            <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                            <img className="lg:w-5 lg:h-5 h-3 h-3" src={star} />
                          </div>
                        </div>
                        <p className="text-sm text-neutral-700 bg-white p-2 rounded-lg mt-3">
                          {item.userComment}
                        </p>
                      </div>
                    ))
                  )}
                </div>
      
                <form
                  onSubmit={addComment}
                  className="lg:w-[30%] w-full flex flex-col gap-3"
                  action=""
                >
                  <input
                    onChange={(e) =>
                      setSaveComment((prev) => ({
                        ...prev,
                        userName: e.target.value,
                      }))
                    }
                    className="w-full bg-white h-10 rounded outline-none border px-2 text-sm border-neutral-200"
                    type="text"
                    value={saveComment.userName}
                    placeholder="نام کاربری را وارد کنید"
                  />
                  <div className="w-full flex justify-between items-center">
                    <input
                      maxLength={5}
                      className="bg-white outline-none border h-10 px-2 text-sm rounded border-neutral-200"
                      type="text"
                      placeholder="کد را وارد کنید"
                    />
                    <img />
                  </div>
                  <textarea
                    onChange={(e) =>
                      setSaveComment((prev) => ({
                        ...prev,
                        userComment: e.target.value,
                      }))
                    }
                    className="h-52 resize-none border rounded border-neutral-200 outline-none p-2 text-neutral-700 bg-white w-full"
                    name=""
                    value={saveComment.userComment}
                    id=""
                  ></textarea>
                  <button
                    type="submit"
                    className={
                      saveComment.userComment == "" || saveComment.userName == ""
                        ? "rounded bg-neutral-500 text-neutral-300 w-full py-2"
                        : "bg-green-secondry w-full py-2 cursor-pointer hover:bg-green-800 transition-all text-white rounded"
                    }
                  >
                    ثبت نظر
                  </button>
                </form>
              </div>
            </section>
    );
};

export default Commentss;