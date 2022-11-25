class Hamiltonian:
    def __init__(self, start):
        self.start = start
        self.path = []
        self.hasPath = False

    def addPath(self):
        self.path.append(self.start)
        self.solvePath(self.start)

    def solvePath(self, vertex):
        if vertex == self.start and len(self.path) == N+1:
            self.hasPath = True
            self.printPath()
            return

        for i in range(len(vertices)):
            if graph[vertex][i] == 1 and visited[i] == 0:
                nbr = i

                visited[nbr] = 1
                self.path.append(nbr)

                self.solvePath(nbr)

                # Backtrack
                visited[nbr] = 0
                self.path.pop()

    def printPath(self):
        for v in self.path:
            print(f"{vertices[v]}->", end="")
        print("")


if __name__ == '__main__':
    vertices = ['출입구', '야채', '음료', '과자', '생활용품', '양념', '정육', '수산', '반찬', '특산품']
    graph = [[0, 1, 0, 0, 0, 0, 0, 0, 1, 1],
             [1, 0, 1, 0, 0, 0, 0, 0, 0, 0],
             [0, 1, 0, 1, 1, 0, 0, 0, 0, 0],
             [0, 0, 1, 0, 1, 1, 0, 0, 1, 0],
             [0, 0, 1, 1, 0, 1, 0, 0, 0, 0],
             [0, 0, 0, 1, 1, 0, 1, 1, 0, 0],
             [0, 0, 0, 0, 0, 1, 0, 1, 0, 0],
             [0, 0, 0, 0, 0, 1, 1, 0, 1, 0],
             [1, 0, 0, 1, 0, 0, 0, 1, 0, 1],
             [1, 0, 0, 0, 0, 0, 0, 0, 1, 0]]

    visited = [0 for x in range(len(vertices))]
    N = 10

    hamiltonian = Hamiltonian(0)
    print("===============================================================================")
    print("===================        마트 경로 제작 프로그램        =====================")
    print("===============================================================================")
    print("                          << 마트 코너 방문 순서 >>\n")

    hamiltonian.addPath()

    if not hamiltonian.hasPath:
        print("No Hamiltonian Path")
    print("===============================================================================")
