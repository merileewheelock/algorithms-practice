grid_size = 2
def get_paths(node):
        global paths

        if  node[0]  >= grid_size and node[1] >= grid_size:
                paths += 1
                return
        else:
                if node[0]<grid_size+1 and node[1] < grid_size+1:
                     get_paths((node[0]+1,node[1]))
                     get_paths((node[0],node[1]+1))
        return paths

def euler():
                print get_paths((0,0))

paths = 0
if __name__ == '__main__':
    euler()