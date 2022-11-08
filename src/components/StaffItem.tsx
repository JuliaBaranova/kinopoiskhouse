import { IStaff } from "../types/staffmovie";

export const StaffItem = ({
  staffId,
  nameRu,
  posterUrl,
  professionKey,
}: IStaff) => {
  return (
    <div className="flex flex-col gap-2.5 font-exo">
        <img className="rounded-2xl h-50 " src={posterUrl} alt={nameRu} />
        <p className="text-base font-normal text-white">{nameRu}</p>
        <p className="font-normal text-sm text-white">{professionKey}</p>
    </div>
  );
};
