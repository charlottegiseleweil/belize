import matplotlib
import matplotlib.pyplot as plt
import matplotlib.image as mpimg
import matplotlib.cbook as cbook
import matplotlib.cm as cm
import numpy as np

from matplotlib.collections import LineCollection
from matplotlib.ticker import MultipleLocator
from matplotlib.ticker import MaxNLocator
from collections import namedtuple


fig = plt.figure("Scenarios")

#load the data
imgAg = mpimg.imread('belizeAgMap.png')
print(imgAg)

imgMining = mpimg.imread('belizeMiningMap.png')
print(imgMining)

imgTourism = mpimg.imread('belizeTourismMap.png')
print(imgTourism)

imgTimber = mpimg.imread('belizeTimberMap.png')
print(imgTimber)

imgPlaceholder = mpimg.imread('placeholderSmall.png')
print(imgPlaceholder)

labels = [1, 2, 3, 4, 5]


totalFlow = {'agriclture': 13861312008, 'mining': 12399680445, 'tourism': 12452638350, 'timber': 13594656482 }
sedimentLoad = {'agriclture': 85968342.1, 'mining': 80521997.16, 'tourism': 44063126.36, 'timber': 41737293.88 }
nutrientLoad = {'agriclture': 13218078.88, 'mining': 13011048.31, 'tourism': 13034430.17, 'timber': 13108934.29 }

totalFlow1 = [13861312008, 12399680445, 12452638350, 13594656482]
sedimentLoad1 = [85968342.1, 80521997.16, 44063126.36, 41737293.88]
nutrientLoad1 = [13218078.88, 13011048.31, 13034430.17, 13108934.29]


x = np.arange(len(labels))  # the label locations
width = 0.2  # the width of the bars

font = {'family': 'serif',
        'color':  'darkred',
        'weight': 'normal',
        'size': 16,
        }

#imgplot = plt.imshow(img)

data = {'apple': 10, 'orange': 15, 'lemon': 5, 'lime': 20}
names = list(data.keys()) #x axis
values = list(data.values()) #y axis

#Plot LULC Images
ax0 = fig.add_subplot(3, 4, 1)
ax0.set_title('Agriculture', fontdict=font)
ax0.imshow(imgAg)
ax0.axis('off')

ax1 = fig.add_subplot(3, 4, 2)
ax1.set_title('Mining')
ax1.imshow(imgMining)
ax1.axis('off')

ax1 = fig.add_subplot(3, 4, 3)
ax1.set_title('Tourism')
ax1.imshow(imgTourism)
ax1.axis('off')


ax1 = fig.add_subplot(3, 4, 4)
ax1.set_title('Timber')
ax1.imshow(imgTimber)
ax1.axis('off')

#bar graph
#Agriculture
ax2 = fig.add_subplot(3,4,5)
ax12 = ax2.twinx()
ax12.bar(labels[0], totalFlow1[0], width, color="#ff4500", label= 'Total Flow | m3/year')
ax2.bar(labels[1], sedimentLoad1[0], width, color="#ffbf58", label='Sediment Tansport | tons/year')
ax2.bar(labels[2], nutrientLoad1[0], width, color="#444444", label='Nutrient Transport | tons/year')
ax2.set_ylim(0, 90000000)
ax2.set_xlim(0, 4)
ax12.tick_params(axis='y', labelcolor="#ff4500")
ax2.set_ylabel('tons/year')
ax12.set_ylabel('m3/year', color="#ff4500")





#Mining
ax3 = fig.add_subplot(3,4,6)
ax13 = ax3.twinx()
ax13.bar(labels[0], totalFlow1[1], width, color="#ff4500", label= 'Total Flow | m3/year')
ax3.bar(labels[1], sedimentLoad1[1], width, color="#ffbf58", label='Sediment Tansport | tons/year')
ax3.bar(labels[2], nutrientLoad1[1], width, color="#444444", label='Nutrient Transport | tons/year')
ax3.set_ylim(0, 90000000)
ax3.set_xlim(0, 4)
ax13.tick_params(axis='y', labelcolor="#ff4500")
ax3.set_ylabel('tons/year')
ax13.set_ylabel('m3/year', color="#ff4500")

#ax3.legend()

#Tourism
ax4 = fig.add_subplot(3,4,7)
ax14 = ax4.twinx()
ax14.bar(labels[0], totalFlow1[2], width, color="#ff4500", label= 'Total Flow | m3/year')
ax4.bar(labels[1], sedimentLoad1[2], width, color="#ffbf58", label='Sediment Tansport | tons/year')
ax4.bar(labels[2], nutrientLoad1[2], width, color="#444444", label='Nutrient Transport | tons/year')
ax4.set_ylim(0, 90000000)
ax4.set_xlim(0, 4)
ax14.tick_params(axis='y', labelcolor="#ff4500")
ax4.set_ylabel('tons/year')
ax14.set_ylabel('m3/year', color="#ff4500")




#Timber
ax5 = fig.add_subplot(3,4,8)
ax15 = ax5.twinx()
ax15.bar(labels[0], totalFlow1[3], width, color="#ff4500", label= 'Total Flow | m3/year')
ax5.bar(labels[1], sedimentLoad1[3], width, color="#ffbf58", label='Sediment Tansport | tons/year')
ax5.bar(labels[2], nutrientLoad1[3], width, color="#444444", label='Nutrient Transport | tons/year')
ax5.set_ylim(0, 90000000)
ax5.set_xlim(0, 4)
ax15.tick_params(axis='y', labelcolor="#ff4500")
ax5.set_ylabel('tons/year')
ax15.set_ylabel('m3/year', color="#ff4500")


#Last Row - Info not yet available
ax6 = fig.add_subplot(3,4,9)
ax6.imshow(imgPlaceholder)

ax7 = fig.add_subplot(3,4,10)
ax7.imshow(imgPlaceholder)


ax8 = fig.add_subplot(3,4,11)
ax8.imshow(imgPlaceholder)


ax9 = fig.add_subplot(3,4,12)
ax9.imshow(imgPlaceholder)


fig.tight_layout()

plt.show()