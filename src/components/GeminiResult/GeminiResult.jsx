import { Avatar, AvatarIcon, Card, CardBody } from "@nextui-org/react";
import { useGeminiContext } from "../../Context/Context";
import Loading from "../Loading/Loading";
import ReactMarkdown from "react-markdown";

function GeminiResult() {
  const { prompt, loading, recentPrompt } = useGeminiContext();

  return (
    <>
      <div className="w-full min-h-screen mb-[15%]">
        {prompt.map((items, index) => {
          return (
            <div
              key={index}
              className=" w-full h-fit flex justify-center items-center"
            >
              <div className="w-1/2 max-2xl:w-[70%] max-lg:w-[70%] max-md:w-[80%] max-sm:w-[90%] h-fit p-5 rounded-xl">
                <Card className="p-2">
                  <CardBody>
                    <div className="flex items-center gap-5">
                      <Avatar
                        icon={<AvatarIcon />}
                        classNames={{
                          base: "bg-gradient-to-br from-[#FFB457] to-[#FF705B]",
                          icon: "text-black/80",
                        }}
                        className="w-8 h-8 border-[2px] border-blue-700 mb-5"
                      />
                      <p className="mb-5 font-semibold">{recentPrompt}</p>
                    </div>
                    <ReactMarkdown className="text-sm font-normal">
                      {items}
                    </ReactMarkdown>
                  </CardBody>
                </Card>
              </div>
            </div>
          );
        })}
        {loading && <Loading />}
      </div>
    </>
  );
}

export default GeminiResult;
