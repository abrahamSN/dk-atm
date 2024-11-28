import * as SessionDto from "../../src/datasources/session.dto";

import * as SessionService from "../../src/services/session.service";

describe("Session Service", () => {
  const expectedRes = {
    id: 1,
    userId: 1,
    createdAt: new Date(),
  };

  const expectedEmptyRes = null;

  it("should create a session", async () => {
    // arrange
    jest.spyOn(SessionDto, "createSession").mockResolvedValue(expectedRes);

    // act
    const res = await SessionService.createSession({ userId: 1 });

    // assert
    expect(res).toEqual(expectedRes);
    expect(res).not.toBeNull();
    expect(typeof res.id).toBe("number");
    expect(typeof res.userId).toBe("number");
  });

  it("should get a session", async () => {
    // arrange
    jest.spyOn(SessionDto, "getSession").mockResolvedValue(expectedRes);

    // act
    const res = await SessionService.getSession();

    // assert
    expect(res).toEqual(expectedRes);
    expect(res).not.toBeNull();
  });

  it("should get an empty session", async () => {
    // arrange
    jest.spyOn(SessionDto, "getSession").mockResolvedValue(expectedEmptyRes);

    // act
    const res = await SessionService.getSession();

    // assert
    expect(res).toEqual(expectedEmptyRes);
    expect(res).toBeNull();
  });

  it("should delete a session", async () => {
    // arrange
    jest.spyOn(SessionDto, "deleteSession").mockResolvedValue({ count: 1 });

    // act
    const res = await SessionService.deleteSession();

    // assert
    expect(res).toEqual({ count: 1 });
    expect(res).not.toBeNull();
    expect(typeof res.count).toBe("number");
  });
});
