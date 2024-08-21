import { Card, CardBody, Chip } from "@nextui-org/react";

export default function Cards() {
  return (
    <>
      <div className="absolute top-[25%] max-sm:top-[20%] left-[50%] -translate-x-[50%] -translate-y-[50%]">
        <h1 className="text-4xl font-semibold">Hello, How can I help you today?</h1>
      </div>
      <div className="absolute top-[50%]  left-[50%] -translate-x-[50%] -translate-y-[50%] flex items-center gap-10 max-sm:flex max-sm:flex-col max-sm:top-[60%]">
        <Card className="max-sm:w-[100%] max-sm:min-h-[20%] max-sm:p-1  w-1/2 min-w-[150px] h-fit min-h-52 font-semibold p-5 ">
          <CardBody className="overflow-hidden">
            <p>Brainstorm team bonding activities for our work retreat</p>
          </CardBody>
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white ",
            }}
          >
            New
          </Chip>
        </Card>
        <Card className="max-sm:w-[100%] max-sm:min-h-[20%] max-sm:p-1 min-w-[150px] w-1/2 h-fit min-h-52  font-semibold p-5">
          <CardBody className="overflow-hidden">
            <p>Plan a low-carb meal with what's available in my fridge</p>
          </CardBody>
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white ",
            }}
          >
            New
          </Chip>
        </Card>
        <Card className="max-sm:w-[100%] max-sm:min-h-[20%] max-sm:p-1 min-w-[150px] w-1/2 h-fit min-h-52  font-semibold p-5">
          <CardBody className="overflow-hidden">
            <p>Come up with a recipe for an upcoming event</p>
          </CardBody>
          <Chip
            variant="shadow"
            classNames={{
              base: "bg-gradient-to-br from-indigo-500 to-pink-500 border-small border-white/50 shadow-pink-500/30",
              content: "drop-shadow shadow-black text-white ",
            }}
          >
            New
          </Chip>
        </Card>
      </div>
    </>
  );
}
