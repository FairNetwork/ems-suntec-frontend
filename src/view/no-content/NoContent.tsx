import React, { useEffect } from 'react';
import './noContent.scss';
import { useNavigate } from 'react-router-dom';

const IMAGE =
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAGQAAABkCAYAAABw4pVUAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAAbrwAAG68BXhqRHAAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAABA/SURBVHic7Z1plF1FEcd/QybbMWBIAiKIIhDF/bCJO6CComBEhCAiGhWF4xHccAUBdzzywQ03BCXiLiqCCCIoorK4IEclKkZkEgMJISEJEEKS54d6l7nv39XLffPmzQjzP6c/3Pequuveut1dXVXdFyYwgQlMYAITeGhiEnACsAS4HTh0bMV5aONRwHVAq1ZuH1OJxjnmAcuAO4CXJegGgOcCX8Ae6HLg5Zm692rX3ZKyol3fBBwsYfhBLXH+nw68CbgJ/8HG8AxgtcOzGji4R7I/KKEPrMIU4C34b3hVlkfqfCK+Mi4EHjlCeecBq9pynQJsOcL6xh30oW0BHA38y/lP54HDnfrmRHjPaNc9EgwQviArgJOAaSOse9xAH9yNzm9VWQ9cgL2lU5y6BoCfOHyf6qG8d0RkW8yDxHpL9YL6uP8xYNtMXcc7vN+htxP4PODOhKyXATv2sL2+I6WItcDJwMML6tmhTV/nvwEzCnqNmcBp2Fziyb0KmC88pdbkmOJV+De0CTgb2K5BXedLHfdgk/toYiY2HN6Hfx/nMDy35KzJMcUAcDqwmfAmbsJM1iZ4plPXO3olbAHmApfgK+V6bAiLWZNjjunAtwkF3AycSXdDzBVS15+BwV4I2wADmJl+D+G9LXd+GxeYDvwCf67o1kJ5gVPffg5dv8bwJwJ/dWQadwqZDvwc31x8ygjqvUzquyxC188xfAbwLcaxQqYBlxIK9WeaTdyKJxHOHftEaMfigbwff54cc4WoBdQCfgtsPcJ6vyR1/jpBO1YP5Fhgo9P+8/ooQwfe5QjzO6xbjwTTCP1Vr0zQj+UbeiShUlYAO/dZDg50BLkRmNWDug+TepeStqz6oZCpxK3EBYTD11+ArXotxKHAbcBKOq2XHdq/1QUYIu5tfVH7/xXAQQXt/kDqPiNDP9oKeR1mLa4lbsW905Hjm70WZGmt8tsZfkt/Kg1vwBZwHmbQ6bS7NdPmTOBeqT+3Kh9NhUzGHJ/14ehhEdrzHFle10th6gppYcPUG5xG35aoQ9+c/2bafL3Q/7FAztFUyCRM5pL7nYat3uu0a4FdeyXM2VL5xYST7U+Je1ynEir19Eyb2vtOLZBztIes06T+IfwQAdjDXyP0V9Ijr/SLCG+2Xu7E5pMYjhL6u4FtEvTT2jR1nt2xSXMpNmwe4fB1q5D52BC0jPQKf44j16sT9K9xZHp9A7mimEw8aNMCjsnwqx/q8xn6AwgVeLn85iUxdKuQ22s8S5x66/istHFVpu4fCf1KTLEjhg5bVfkd6RuYS2gKPinT1icibdWLF2vvViFqKT4mQbsL4f2kjI1HA+uEvrIWD8OG/iXASxrIC/jD1mbg2Rm+U4UntdKucJXTVr2sitxAtwrR9nKOyV/hP+AY3iP067BcsrqH+D8N5AVs2LpLKr6ggO8vwpMb3ibju7ercgl2Mx66VcjnhO+UDP0CoV9MepSYjhkAdR61who7Q3cl7Kp7Z3ieIPTryYdq98JXxBosdyt1490q5E3C970M/ZaEw9BeGZ43OvLVy1cayAtYAkK9gisLeLSr/qSA51hH2CuAnQp4u1XIPsL3jwIe9SJ8NEM/iA1LMYUc2EBeBgkXRSWZgRqoWlDAo8PHlyi33btVyJbCt4F8fpcujK8raOe9jowtzGJsFP2cJxUsxVauKTyMTldDi/jYX8fVwtMkytitQiC0tLbP0O9A5xC+kbxDdQ6hO6ir4er7UkHOqoBwLbGosC1d7zyugZwjUcifhDcWBKvjBuF5RQGPF2V0h6tYFx3EYtp1LCxoWLNKrijg2RqYXbtej6WM9gNDcv3oAh414UuUeL5cb8LM6AAxhTwd87xWWIyZsjk8Xa6vLeDZRa5vxgTuB9T7XJKZqPPGngU8l2KjQIVJwFM9wphCtDtdUtAohCbx7wt4NLqWc9H3EroO8OaQI7GHuQzzYV0v/+9J3gC5nzBJ4wCPsFQhP8s0CDZ5PaJ2vY6yOUQfQj8Vcqdc63ppC8wCnI0lbXwDOA7zs1WYSVnPulyuX+gReQqZTOeCp4UlLuTweLleRNnQo9kpOq6PJlbL9Uy59oyEEwmDVHML2lKF7I3z/D2FzMWUUuEWwjfJw25y/c8CHghDv7kgVi+hCtEe0sJW9Osz9ZQEoYawkHiFGTjWpKcQ9cr+oaAxgMfKdcnKF8KtCCXK7xXukmvtIWC+u+eQHkpLo4I3yPXuSuApRN3KJdYVhG/6LYV8mp3RT4XkekiFP2DD+C8j/5dup1OFPEEJShRyS2FjOjnrFuXXYCvjITqD/2OpkHVyHUtgAHN1HAB8xvkvt+GowmK5Lln3BHGC/Qob01Vv3T4fIHRTXIoFhdT5lgoLexjJSn1b4S3d5/4W4dM3PwaNLwULZ6+H6Btb6rPXXau6tXmzXB+IDYdqZd1X2F4Or8QMhLsIdz1VuF+uS519P5fr2S5VCLUgi14+3elamjStnmEV8iXEt4rVS9OMP6+HvJrOzMo7fNbA47umsM0dhC+1r76O7YVvaQnTCsoe0Hysiw9hcWKNLHo5vo8iviOpKk23ISv/UYRprrdFeKcJ3b2FbW5Nd4qcKXyrSpjUfT7ZodE5YSNhZDHW/Qcw217zl6rSdM+58qsyNhJP1p7k0JZgqvBtKOSbInxFw/MGyh5sKkWoRT52shNhqlAvFKIPOJVD1a1CBoVP56IYVJG5BScQ7tWOHTFxOP7+iNSQpRgg7JFTS4SsIaWMozK8OmTdnSZ/ADOEb20h3xzhix0h0oFbhSllYx9G2KOqkspSrEPnnqZnjHhtb6AscKSTetGYjt1b4weLebbrfDcrgTc86GIptRvqB1ic2XMilu661XHUm7OaYBPwWsrSlTRHt9Tk1nsrNQb0ZQt6lqcQXSnnbOWFWCKDKqVbhTQdshRHYyHTEqhCSidnXdGXKkRHjcA68xSi4dOSJIWFhJG0R3iEDnRiG+mxSN9uQKsmfdEkS+i7Kl2HaIgicFh6CtFxrdSTqW7zEkVC6HEtOf+kV9C2Sv1o6rfzFni6ToNQITcpk2fSqkLc2K8DVUjpyTk6kXou8NGCKqR0UleF6L0PAGcxnCL0Hcyh6gXxOuD1kL/L9dOKROy+h+hDiPWQ+htXYkGVINZDBkjvS9F5Ve+9sqIqTAK+hsVV6gh6iIdBwhzWXAIZmNB1notLGiPck368Q+N5Bqo1hpq8TaBe289iC1Y9RUL3pehhCd4JeLl12noci9LrIRuBa+S3/TDX8TLM5p7n8Km2S3uWury9YI/3xp2HHQM1Emhbz8E80JoRou0/Wf73gnjfw4apWF7Bbylf4Qf76q6g8xAxLxFhKuEbUbJr6DjhiaVYem+c9wY2wVcdfi26L2WW/L+etNv+6Iic72si6PMzQsa8p38XOjfVRfAy4bkoQatuda80gW4y1XIR4XC9r9CUBKeOcep2tzLEHHlXEY8hQPwQMU0i2yNRRwWdEFNhzfOxVXivMht3ivy+GhtuDiaUT/fk31jQjr7AKynb8t2Br+C/NeckeHSSrGc8vhizWlYDh9R+ny08d5PPBPRiHk17yBb4Weler6jjYqF/c0FberDbuQ3kfAAHOsL+jXQiwB5Cvw5zT+xEZ/xD99aph7kktBlTSin0eL57sd6XwiTCvfpB5ohgFqFHe98Gcj6AQTq3DreAtxfwqPd2f8JNPDoMXNulwN5hm6XYT/h+U8Czp/AsJ9+bTxCem1M8qWDQRuDL8tvxpANPGwmTir+AGQl1nCrXmuWYe+sqlDoRPWi6018LeHSnbpWhE8Nkwpf46ymeXHTuLDo9oHNJn10FZrnUoe6Cy7H973X8Ta5L1zAjgbahMng4TK5z+yePITQc9sZ61m3Es2GSqDRaN/NSitwOs4K8CXcN/gb9lwpdSXJ3hW6HrGuEL7cBU3cXbyC9nW2Q/Dn3KUs2KYhOnm/I8PwyIsBxEXqdYNeSj8lX6EYhg4Tnl+TCBacJfexQzgq5LdEtyt32AfSIjeWkI4l6zFILm9hTE6AmTZQOW90oZHfhyZ2oMEh4CEDK3N2GMJ1Ky3I6zf8o5mMPZw1mk78L++KNxs5Th8lsRXgyw9GZdi8S+lhvUnSjEF0v5Q4NOFTo15GO2yx05KqG7IXYEB074qkDA+TTe6qyCTNpY9C5JzcvvF/ozysR2JGrBHqa6kkZevXuqvVZh3c+zGWYQdDVBwRSn2zQMkR86NJFYov0Ear7Cu0thfI2VcgAnYcvtwjjFHXsRZgEGOzraGMbwqydRYzwozCHkx//6uW7ibr0BJ1UjGQ64TCnu7I8NFXIU4R+DelMF3VAXh2hm0QYR9lE/uSkIgxi+6/f0xZIv9+h5d2Reg4Rus2kD6/RvN8TC2RtqpCThP7CBO2znPpj5vGHHNpPFsjTFQaxQwHei+3IVQVtwj9+D+ywszrttcTXMScKbcnu36YKuVLo3xqhG8DmvZLe8QrCtdc1jDzHrBi7Eg5r92LfI1TsT/jQjo3UO1foNpDfe9FEIdsSrqliWTXeCaxefOcgwg+/3Em453LU8SxC9/UafKWoy3oF8VWufjwstwhtopA3C+2fInSzCV84dQmB+eh03ltPl97cXuAIQgtkHaEzcRdCwWPGwClC94uMDE0Uotn2H3BoBggP3rmH8MSJFxAmg2wmn+A96tBJsroBTdU52aHzxu/dCG8ydTpQqUJ2I3x51PEJdlCy1qmKW4CfZH5Cov2+4h2EN7sZszyqCXwq4cbQ+wgPrAE7cadOd2ai7VKFfFrovKNen0H4oP/I8Kp6APiI02YLM3jGFd6IH8G7kOHF41zCnVNLCIeD+UKzinhGY4lCtiYMnKlVuCvhPsm7GD42Yxvgx057LUyJZ2Or9H5/IyuJI/A/NTfEsP1+pPP/YjozHScTHlMeOzW0RCGnC80SOh/cjphnQOuqlPZSLH7hKUPLsjb9mGIylsRwLvFF5GbsZJ0ZwMed/2+ic8fvB+X/lfhumpxCZhHu/q3PCdsTpi+1sAMuZ2GZlbHPG8XKmH7X/RDK357qDToO3yM6xPBKfg6hX807RSGnkLPk/5UMm9z7EPq1Wm3Z3k542EFVrsfi+ec6Mlb3MWYo9Q5r+Seh2djC1jbVwctq8dxPmOuVUsjehPNaZQktIMwGabVlWhyReRPWu+sr8Gp0+Cr2Yq7AT7XtG3Ssb7WF+iK2Hnk+djJQU4X9EJtQF8nv/6BzU09MIVthStdh8XHEJ+dUWcQYLvia4FCsl9yGJdcdQGhpTMcO249tEI2VewiPkG1hyQXVW+opZAr+576vJn2keUyGkxn5VrtxiZ2x8TmWBNGkXEC4i7bV/k0/F9FN2YgFyfr+xbWxwJOxm419jbm0eFkduUyPEkUsxF/FP+jxSODD+PNQv8t/27IUnWH1YMckzLX9NcpODOpVWY7F/l9OH2MXKfTkY1U9xiDm2j8I86g+jcIMjQKswwJkV2OJC9fRv0ObizAeFaKYgsXB98Am2B2x7MftMOXV03E2YA99dbvciuVc/RtLFb2B8gNmJjCBCUxgAhP4v8L/ADYpmJg0kKzfAAAAAElFTkSuQmCC';

const NoContent = () => {
    const navigate = useNavigate();

    useEffect(() => {
        const bounceElement = document.getElementById('bounce') as HTMLDivElement;

        if (bounceElement) {
            bounceElement.style.backgroundImage = `url(${IMAGE})`;
        }
    }, []);

    return (
        <div className="no-content">
            <div>
                <h2>Ziemlich wüst hier...</h2>
                <p>
                    Sieht aus, als wären wir in der digitalen Wüste gelandet. Zur{' '}
                    <a onClick={() => navigate('/')}>Startseite</a>
                </p>
            </div>
            <div className="no-content__animation-container">
                <div className="no-content__animation-container__bounce" id="bounce"></div>
                <div className="no-content__animation-container__pebble1"></div>
                <div className="no-content__animation-container__pebble2"></div>
                <div className="no-content__animation-container__pebble3"></div>
            </div>
        </div>
    );
};

NoContent.displayName = 'NoContent';

export default NoContent;
