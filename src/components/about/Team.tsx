import TeamCircle from "../../svgs/TeamCircle";

const Team = () => {
  return (
    <section className="pb-10 pt-20 dark:bg-dark lg:pb-20 lg:pt-[120px]">
      <div className="container mx-auto">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[510px] text-center">
              <span className="mb-2 block text-lg font-semibold text-primary">
                Our Team Members
              </span>
              <h2 className="mb-3 text-3xl font-bold leading-[1.2] text-dark dark:text-white sm:text-4xl md:text-[40px]">
                Our Productive Team
              </h2>
              <p className="text-base text-body-color dark:text-dark-6">
                At HiveHaus, we pride ourselves on having a dynamic, highly
                motivated, and result-driven team. Our collective passion for
                innovation and excellence sets us apart in the office rental
                industry. Each member brings unique strengths, contributing to a
                collaborative environment where creativity and efficiency
                thrive.
              </p>
            </div>
          </div>
        </div>

        <div className="-mx-4 flex flex-wrap justify-center">
          <TeamCard
            name="Will Collins"
            profession="Front End Developer"
            imageSrc="https://images.unsplash.com/photo-1498758536662-35b82cd15e29?q=80&w=988&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamCard
            name="Liam Patel "
            profession="Web Developer"
            imageSrc="https://plus.unsplash.com/premium_photo-1661492413927-5bdcbb198a30?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamCard
            name="Sophia Bennett"
            profession="Web Developer"
            imageSrc="https://plus.unsplash.com/premium_photo-1673976276813-4ad7ea41dfb8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
          <TeamCard
            name="Ethan Martinez "
            profession="Web Developer"
            imageSrc="https://images.unsplash.com/photo-1552960394-c81add8de6b8?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          />
        </div>
      </div>
    </section>
  );
};

export default Team;

interface TeamCardProps {
  imageSrc: string;
  name: string;
  profession: string;
}

const TeamCard = ({ imageSrc, name, profession }: TeamCardProps) => {
  return (
    <>
      <div className="w-full px-4 md:w-1/2 xl:w-1/4">
        <div className="mx-auto mb-10 group w-full max-w-[370px]">
          <div className="relative duration-200 group-hover:border-slate-700 group-hover:border-2 overflow-hidden rounded-lg border-2 border-green-100">
            <img
              src={imageSrc}
              alt=""
              className="w-full group-hover:scale-105 transition-transform duration-300"
            />
            <div className="absolute bottom-5 left-0 w-full text-center">
              <div className="relative mx-5 overflow-hidden rounded-lg bg-white px-3 py-5 dark:bg-dark-2">
                <h3 className="text-base font-semibold text-dark dark:text-white">
                  {name}
                </h3>
                <p className="text-xs text-body-color dark:text-dark-6">
                  {profession}
                </p>
                <div>
                  <span className="absolute bottom-0 left-0">
                    <svg
                      width={61}
                      height={30}
                      viewBox="0 0 61 30"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <circle
                        cx={16}
                        cy={45}
                        r={45}
                        fill="#13C296"
                        fillOpacity="0.11"
                      />
                    </svg>
                  </span>
                  <span className="absolute right-0 top-0">
                    <TeamCircle />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
